import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import { List, Avatar, Icon } from 'antd';


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
  //console.log(first.make);

  const listData1 = [];
   listData1.push({
    href: 'http://ant.design',
    title: `${first.make} ${first.model}`,
    rating: `${first.rating}`,
    image: `${first.image}`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
   listData1.push({
    href: 'http://ant.design',
    title: `ant design part`,
    rating: 5,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });


  const listData2 = [];
   listData2.push({
    href: 'http://ant.design',
    title: `ant design part`,
    rating: 5,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 4 }} />
    {text}
  </span>
);
 

  return (
  <div>
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 1,
    }}
    dataSource={props.pop[0]}
    renderItem={item => (
      <List.Item
        key={item.title} 
      >
        <List.Item.Meta
          description = {<img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />}
          title={<a id = "title1" href={item.href}>{item.title}</a>}
          description={<div><IconText type="star-o" text={item.rating} key="list-vertical-star-o" /><p>Rating</p></div>}
        />
        {item.content}
        <img
            width={272}
            alt="logo"
            
             src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
      </List.Item>
    )}
  />
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 1,
    }}
    dataSource={props.pop[1]}
    renderItem={item => (
      <List.Item
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
        key={item.title}
        actions={[
          <IconText type="star-o" text="156" key="list-vertical-star-o" />,
          <IconText type="like-o" text="156" key="list-vertical-like-o" />,
          <IconText type="message" text="2" key="list-vertical-message" />,
        ]}
        
      >
        <List.Item.Meta
          description = {<img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />}
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
        <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
      </List.Item>
    )}
  />
  </div>
  );
}


export default Popcard;


          