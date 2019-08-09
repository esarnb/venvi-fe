
import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'
import carModel from "../model/t.obj";
import carTexture from "../model/t.mtl";
import p1 from '../model/diffuse.jpeg'
import p2 from '../model/diffuse2.jpeg'
import p3 from '../model/diffuse3.jpeg'
import s1 from '../model/spec.jpeg'






THREE.ShaderLib['sky'] = {

  uniforms: {

    luminance:   { type: "f", value:1 },
    turbidity:   { type: "f", value:2 },
    reileigh:  { type: "f", value:1 },
    mieCoefficient:  { type: "f", value:0.005 },
    mieDirectionalG: { type: "f", value:0.8 },
    sunPosition:   { type: "v3", value: new THREE.Vector3(5, 3000, -6000) }

  },

  vertexShader: [

    "varying vec3 vWorldPosition;",

    "void main() {",

      "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
      "vWorldPosition = worldPosition.xyz;",

      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

    "}",

  ].join("\n"),

  fragmentShader: [

    "uniform sampler2D skySampler;",
    "uniform vec3 sunPosition;",
    "varying vec3 vWorldPosition;",

    "vec3 cameraPos = vec3(0., 0., 0.);",
    "// uniform sampler2D sDiffuse;",
    "// const float turbidity = 10.0; //",
    "// const float reileigh = 2.; //",
    "// const float luminance = 1.0; //",
    "// const float mieCoefficient = 0.005;",
    "// const float mieDirectionalG = 0.8;",

    "uniform float luminance;",
    "uniform float turbidity;",
    "uniform float reileigh;",
    "uniform float mieCoefficient;",
    "uniform float mieDirectionalG;",

    "vec3 sunDirection = normalize(sunPosition);",
    "float reileighCoefficient = reileigh;",

    "// constants for atmospheric scattering",
    "const float e = 2.71828182845904523536028747135266249775724709369995957;",
    "const float pi = 3.141592653589793238462643383279502884197169;",

    "const float n = 1.0003; // refractive index of air",
    "const float N = 2.545E25; // number of molecules per unit volume for air at",
                "// 288.15K and 1013mb (sea level -45 celsius)",
    "const float pn = 0.035;  // depolatization factor for standard air",

    "// wavelength of used primaries, according to preetham",
    "const vec3 lambda = vec3(680E-9, 550E-9, 450E-9);",

    "// mie stuff",
    "// K coefficient for the primaries",
    "const vec3 K = vec3(0.686, 0.678, 0.666);",
    "const float v = 4.0;",

    "// optical length at zenith for molecules",
    "const float rayleighZenithLength = 8.4E3;",
    "const float mieZenithLength = 1.25E3;",
    "const vec3 up = vec3(0.0, 1.0, 0.0);",

    "const float EE = 1000.0;",
    "const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;",
    "// 66 arc seconds -> degrees, and the cosine of that",

    "// earth shadow hack",
    "const float cutoffAngle = pi/1.95;",
    "const float steepness = 1.5;",


    "vec3 totalRayleigh(vec3 lambda)",
    "{",
      "return (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn));",
    "}",

    // see http://blenderartists.org/forum/showthread.php?321110-Shaders-and-Skybox-madness
    "// A simplied version of the total Reayleigh scattering to works on browsers that use ANGLE",
    "vec3 simplifiedRayleigh()",
    "{",
      "return 0.0005 / vec3(94, 40, 18);",
      // return 0.00054532832366 / (3.0 * 2.545E25 * pow(vec3(680E-9, 550E-9, 450E-9), vec3(4.0)) * 6.245);
    "}",

    "float rayleighPhase(float cosTheta)",
    "{   ",
      "return (3.0 / (16.0*pi)) * (1.0 + pow(cosTheta, 2.0));",
    "// return (1.0 / (3.0*pi)) * (1.0 + pow(cosTheta, 2.0));",
    "// return (3.0 / 4.0) * (1.0 + pow(cosTheta, 2.0));",
    "}",

    "vec3 totalMie(vec3 lambda, vec3 K, float T)",
    "{",
      "float c = (0.2 * T ) * 10E-18;",
      "return 0.434 * c * pi * pow((2.0 * pi) / lambda, vec3(v - 2.0)) * K;",
    "}",

    "float hgPhase(float cosTheta, float g)",
    "{",
      "return (1.0 / (4.0*pi)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0*g*cosTheta + pow(g, 2.0), 1.5));",
    "}",

    "float sunIntensity(float zenithAngleCos)",
    "{",
      "return EE * max(0.0, 1.0 - exp(-((cutoffAngle - acos(zenithAngleCos))/steepness)));",
    "}",

    "// float logLuminance(vec3 c)",
    "// {",
    "//   return log(c.r * 0.2126 + c.g * 0.7152 + c.b * 0.0722);",
    "// }",

    "// Filmic ToneMapping http://filmicgames.com/archives/75",
    "float A = 0.15;",
    "float B = 0.50;",
    "float C = 0.10;",
    "float D = 0.20;",
    "float E = 0.02;",
    "float F = 0.30;",
    "float W = 1000.0;",

    "vec3 Uncharted2Tonemap(vec3 x)",
    "{",
       "return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;",
    "}",


    "void main() ",
    "{",
      "float sunfade = 1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);",

      "// luminance =  1.0 ;// vWorldPosition.y / 450000. + 0.5; //sunPosition.y / 450000. * 1. + 0.5;",

       "// gl_FragColor = vec4(sunfade, sunfade, sunfade, 1.0);",

      "reileighCoefficient = reileighCoefficient - (1.0* (1.0-sunfade));",

      "float sunE = sunIntensity(dot(sunDirection, up));",

      "// extinction (absorbtion + out scattering) ",
      "// rayleigh coefficients",

      // "vec3 betaR = totalRayleigh(lambda) * reileighCoefficient;",
      "vec3 betaR = simplifiedRayleigh() * reileighCoefficient;",

      "// mie coefficients",
      "vec3 betaM = totalMie(lambda, K, turbidity) * mieCoefficient;",

      "// optical length",
      "// cutoff angle at 90 to avoid singularity in next formula.",
      "float zenithAngle = acos(max(0.0, dot(up, normalize(vWorldPosition - cameraPos))));",
      "float sR = rayleighZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));",
      "float sM = mieZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));",



      "// combined extinction factor  ",
      "vec3 Fex = exp(-(betaR * sR + betaM * sM));",

      "// in scattering",
      "float cosTheta = dot(normalize(vWorldPosition - cameraPos), sunDirection);",

      "float rPhase = rayleighPhase(cosTheta*0.5+0.5);",
      "vec3 betaRTheta = betaR * rPhase;",

      "float mPhase = hgPhase(cosTheta, mieDirectionalG);",
      "vec3 betaMTheta = betaM * mPhase;",


      "vec3 Lin = pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * (1.0 - Fex),vec3(1.5));",
      "Lin *= mix(vec3(1.0),pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up, sunDirection),5.0),0.0,1.0));",

      "//nightsky",
      "vec3 direction = normalize(vWorldPosition - cameraPos);",
      "float theta = acos(direction.y); // elevation --> y-axis, [-pi/2, pi/2]",
      "float phi = atan(direction.z, direction.x); // azimuth --> x-axis [-pi/2, pi/2]",
      "vec2 uv = vec2(phi, theta) / vec2(2.0*pi, pi) + vec2(0.5, 0.0);",
      "// vec3 L0 = texture2D(skySampler, uv).rgb+0.1 * Fex;",
      "vec3 L0 = vec3(0.1) * Fex;",

      "// composition + solar disc",
      "//if (cosTheta > sunAngularDiameterCos)",
      "float sundisk = smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);",
      "// if (normalize(vWorldPosition - cameraPos).y>0.0)",
      "L0 += (sunE * 19000.0 * Fex)*sundisk;",


      "vec3 whiteScale = 1.0/Uncharted2Tonemap(vec3(W));",

      "vec3 texColor = (Lin+L0);   ",
      "texColor *= 0.04 ;",
      "texColor += vec3(0.0,0.001,0.0025)*0.3;",

      "float g_fMaxLuminance = 1.0;",
      "float fLumScaled = 0.1 / luminance;     ",
      "float fLumCompressed = (fLumScaled * (1.0 + (fLumScaled / (g_fMaxLuminance * g_fMaxLuminance)))) / (1.0 + fLumScaled); ",

      "float ExposureBias = fLumCompressed;",

      "vec3 curr = Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);",
      "vec3 color = curr*whiteScale;",

      "vec3 retColor = pow(color,vec3(1.0/(1.2+(1.2*sunfade))));",


      "gl_FragColor.rgb = retColor;",

      "gl_FragColor.a = 1.0;",
    "}",

  ].join("\n")

};

var Sky = function () {

  var skyShader = THREE.ShaderLib[ "sky" ];
  var skyUniforms = THREE.UniformsUtils.clone( skyShader.uniforms );

  var skyMat = new THREE.ShaderMaterial( {
    fragmentShader: skyShader.fragmentShader,
    vertexShader: skyShader.vertexShader,
    uniforms: skyUniforms,
    side: THREE.BackSide
  } );

  var skyGeo = new THREE.SphereGeometry( 1000, 32, 15 );
  var skyMesh = new THREE.Mesh( skyGeo, skyMat );


  // Expose variables
  this.mesh = skyMesh;
  this.uniforms = skyUniforms;
}

class TestDrive extends Component
{
  constructor(props)
  {
    super(props);
    this.startTestDrive = null
    this.changeColor = null;
    this.w = false;
    this.a = false;
    this.d = false;
  };
  componentDidMount()
  {
    var scene = new THREE.Scene();
    var light = new THREE.PointLight( 0xFFFFFF, 1, 1000 );
    light.position.set(0, 250, 50 );
    //scene.add( light );
    var light = new THREE.PointLight( 0xFFFFFF, 1, 1000 );
    light.position.set(200, 250, 250 );
    scene.add( light );
    light.castShadow = true;            // default false

    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.3,
      10000
    );
    // instantiate a loader
    var object = null;

    var manager = new THREE.LoadingManager();
    var wheels = [];
    var body = null;
    var allMaterials = null;
    manager.setURLModifier( ( url ) => {
      if (url === "diffuse.jpeg")
      {
        return p1;
      }
      if (url === "diffuse2.jpeg")
      {
        return p2;
      }
      if (url === "diffuse3.jpeg")
      {
        return p3;
      }
      if (url === "spec.jpeg")
      {
        return s1;
      }
      return url;
    } );
    let mtlLoader = new MTLLoader(manager);
    let objLoader = new OBJLoader();
    mtlLoader.load(carTexture, (materials) => {
      materials.preload();
      manager.onLoad = function ( ) {
        allMaterials = materials.materials;
        objLoader.setMaterials(materials);
        console.log( 'Loading complete!');
        objLoader.load(carModel, (obj) => {
          object = obj;
          obj.children.forEach(function(item, index)
          {
            if (item.name.startsWith("Wheel"))
            {
              item.geometry.computeBoundingSphere();
              var center = item.geometry.boundingSphere.center.clone();
              item.geometry.center();
              item.position.add(center);
              wheels.push(item);
            }
            else if (item.name.startsWith("Body"))
            {
              body = item;
            }
          })
          scene.add(obj);
                object.translateZ(-100);
                object.scale.set(0.2,0.2,0.2);
                object.castShadow = true;
        })
      };
    })

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);
    //camera.position.z = 400;
    camera.position.y = 40;

    var axis = new THREE.Vector3(1, 0, 0).normalize();
    var terrainAnim = null;
    var isTestDrive = false;
    var speed = 0;
    var terrain = null;
    var animate = function()
    {
      requestAnimationFrame(animate);
      if (object)
      {
          if (isTestDrive)
          {
            if (this.a)
              object.rotation.y += 0.01;
            if (this.d)
              object.rotation.y -= 0.01;
            if (this.w)
            {
              if (speed < 0.5)
              {
                speed += 0.01
              }
            }
            else
            {
              if (speed >0)
              {
                speed -= 0.003;
              }
            }
            scene.fog = new THREE.FogExp2( 0xffffbb, 0.0015 + 0.02*speed);
            var vector = new THREE.Vector3(0, 0, -1 );
            var axis1 = new THREE.Vector3( 0, 1, 0 );
            var angle = object.rotation.y;

            vector.applyAxisAngle( axis1, angle );

            if (terrain)
            {
              terrain.translateOnAxis(vector, speed*10);
            }
            wheels.forEach(function(item, index)
            {
                item.rotateOnAxis(axis, speed);
            })
          }
          else
          {
            object.rotation.y += 0.01;
            wheels.forEach(function(item, index)
            {
                item.rotateOnAxis(axis, 0.1);
            })
          }
      }
      if (terrainAnim)
      {
        terrainAnim();
      }
      renderer.render(scene, camera);
    }.bind(this);

    animate();

    var id = 0;
    this.changeColor = function()
    {
        id = (id + 1) % 3;
        if (id === 0)
        {
          body.material = allMaterials.BodySG;
        }
        if (id === 1)
        {
          body.material = allMaterials.BodySG_2;
        }
        if (id === 2)
        {
          body.material = allMaterials.BodySG_3;
        }
    };

    this.startTestDrive = function()
    {
      var directionalLight;

      scene.fog = new THREE.FogExp2( 0xffff99, 0.0015 );
      isTestDrive = true;
      {
        var geometry, texture, material, animate, mesh;
        var self = this
        geometry = new THREE.PlaneGeometry( 10000, 10000, 320, 320);
        geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );

        animate = function(){
          var verticeCount = geometry.vertices.length
          for ( var i = 0, verticeCount ; i < verticeCount; i ++ ) {
            geometry.vertices[ i ].y =  (10 * Math.sin( (i/2) )+ 3* Math.cos( i/2));
          }
        }
        terrainAnim = animate;
        geometry.computeFaceNormals();
        geometry.computeVertexNormals();

        material = new THREE.MeshBasicMaterial({
          color: 0xcfb68d,
          side: THREE.DoubleSide
        } );

        mesh = new THREE.Mesh( geometry, material );
        mesh.overdraw = true;
        mesh.position.y=-15;

        scene.add(mesh);
        terrain = mesh;
      };

      {
        scene.add(new THREE.AmbientLight(0x222222))
      };

      {
        var directionalLight = new THREE.DirectionalLight(0xffffff, 0.00);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);
      };

      {
        var inclination = 0.38
        var azimuth = 0.25
        var distance = 4000

        var sunSphere = new THREE.Mesh(
          new THREE.SphereGeometry( 20000, 30, 30 ),
          new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false })
        )

        var theta = Math.PI * (inclination - 0.5)
        var phi = 2 * Math.PI * (azimuth - 0.5)

        sunSphere.position.x = distance * Math.cos(phi);
        sunSphere.position.y = distance * Math.sin(phi) * Math.sin(theta);
        sunSphere.position.z = distance * Math.sin(phi) * Math.cos(theta);

        scene.add(sunSphere);
        var sky = new Sky()
        sky.uniforms.turbidity.value=1
        sky.uniforms.reileigh.value=0.9
        sky.uniforms.mieCoefficient.value=0.005
        sky.uniforms.mieDirectionalG.value=0.4
        sky.uniforms.luminance.value=1
        sky.uniforms.sunPosition.value.copy(sunSphere.position);
        scene.add(sky.mesh);
      }

    }
  };

  onKeyPress(e)
  {
    if (e.key === 'w')
      this.w = true;
    if (e.key === 'a')
      this.a = true;
    if (e.key === 'd')
      this.d = true;
    if (e.key === 'g')
      this.startTestDrive();
    if (e.key === 'c')
      this.changeColor();
  };

  onKeyUp(e)
  {
    if (e.key === 'w')
      this.w = false;
    if (e.key === 'a')
      this.a = false;
    if (e.key === 'd')
      this.d = false;
  };



render() {
    return <div ref={ref => (this.mount = ref)} 
        onKeyPress={this.onKeyPress.bind(this)}
        onKeyUp={this.onKeyUp.bind(this)}
        tabIndex="0"/>;
  }
}



export default TestDrive;