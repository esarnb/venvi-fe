import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import left1 from './left1.jpg';
import left2 from './left2.jpg';
import right1 from './right1.jpg';
import right2 from './right2.jpg';
import { Row, Col } from 'antd';
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
  if (first.rating === 5)
  {
    first.rating = "5.0";
  }

  if (second.rating === 5)
  {
    second.rating = "5.0";
  }




  return (
  <div>
  <Card className = "cardSection">
    <div className="titleSection" >
      <Row>
        <Col span={12}>
          <p className="title">{first.make} {first.model}</p>
        </Col>
      </Row>
      <Row  gutter={16} align="center">
        <Col span={1} offset={2} className="gutter-row">
          <p className="ratingright">{first.rating}</p>
        </Col>
        <Col span={4} className="gutter-row">
          <Row>
            <Col span={12} align="center">
              <p className="out">out of</p> 
            </Col>
          </Row>
          <Row>
             <Col span={12} align="center">
               <p className="five">5 stars</p>
             </Col>
          </Row>
        </Col>
      </Row>
    </div>

      <Row id="rightDemo">

        <Col span={24} id="rightbg">       
          <div id="rightContainer" style={{ backgroundImage: props.number === "1" || props.number === "3" ? 
          `url(${right1})`
          : `url(${right2})`}}>
            <div id="front"></div>
           <img id="right" alt="car" src={first.image}/>
             <div id="backwrap">
             <div id="back"></div>
             </div>
          </div>
        </Col>
      </Row>

  </Card>

  <Card className = "cardSectionleft">
    <div className="titleSection" >
      <Row>
        <Col span={12}>
          <p className="title">{second.make} {second.model}</p>
        </Col>
      </Row>
      <Row  gutter={16} align="center">
        <Col span={1} offset={2} className="gutter-row">
          <p className="ratingleft">{second.rating}</p>
        </Col>
        <Col span={4} className="gutter-row">
          <Row>
            <Col span={12} align="center">
              <p className="outleft">out of</p> 
            </Col>
          </Row>
          <Row>
             <Col span={12} align="center">
               <p className="fiveleft">5 stars</p>
             </Col>
          </Row>
        </Col>
      </Row>
    </div>

      <Row id="leftDemo">

        <Col span={24} id="leftbg">       
          <div id="leftContainer" style={{ backgroundImage: props.number === "2" || props.number === "4" ? 
          `url(${left1})`
          : `url(${left2})`}}>
            <div id="front2"></div>
           <img id="left" alt="car" src={second.image}/>
             <div id="back2wrap">
             <div id="back2"></div>
             </div>
          </div>
        </Col>
      </Row>

  </Card>

   
  </div>
  );
}


export default Popcard;


          