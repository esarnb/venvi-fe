import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import left1 from './left1.jpg';
import left2 from './left2.jpg';
import right1 from './right1.jpg';
import right2 from './right2.jpg';
import { Card } from 'antd';



function Popcard(props){
  console.log(props);
  var first;
  var second;
  switch(props.number)
  {
    case "1": 
      first = props.pop[0][0];
      second = props.pop[0][1];
      break;
    case "2": 
      first = props.pop[0][2];
      second = props.pop[0][3];
      break;
    case "3": 
      first = props.pop[0][4];
      second = props.pop[0][5];
      break;
    case "4": 
      first = props.pop[0][6];
      second = props.pop[0][7];
      break;
  }

  console.log(first);
  console.log(first.make);
  console.log(first.rating);




  return (
  <div>
  <Card className = "cardSection" style={{ width: 1500}}>
    <p className="title">{first.make} {first.model}</p>
    <p className="ratingright">{first.rating}</p>
    <p className="out">out of</p> 
    <p className="five">5 stars</p>
    <div id="front"></div>
    <div id="rightContainer" style={{ backgroundImage: props.number === "1" || props.number === "3" ? 
    `url(${right1})`
    : `url(${right2})`}}>
     <img id="right" alt="car" src={first.image}/>
    </div>
    <div id="back"></div>
  </Card>

   <Card className = "cardSectionleft" style={{ width: 1500 }}>
    <p className="title">{second.make} {second.model}</p>
    <p className="ratingleft">{second.rating}</p>
    <p className="outleft">out of</p>
    <p className="fiveleft">5 stars</p>
     <div id="front2"></div>
    <div id="leftContainer" style={{ backgroundImage: props.number === "2" || props.number === "4" ? 
    `url(${left1})` :
    `url(${left2})`
    }}>
    <img id="left" alt="car" src={second.image}/>
     <div id="back2"></div>

    </div>

  </Card>
  </div>
  );
}


export default Popcard;


          