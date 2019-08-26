import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';

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
    `url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80')`
    : `url('https://images.unsplash.com/photo-1560190356-3c4e8a38d9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2769&q=80')`}}>
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
    `url('https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80')` :
    `url('https://images.unsplash.com/photo-1518557984649-7b161c230cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1950&q=80')`
    }}>
    <img id="left" alt="car" src={second.image}/>
     <div id="back2"></div>

    </div>

  </Card>
  </div>
  );
}


export default Popcard;


          