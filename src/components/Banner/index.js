import React from 'react';
import "./style.css";
import down from './down.png';

import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';


const BgElement = Element.BgElement;



class Banner extends React.Component {

  render(){
    return (
      <div>
      <BannerAnim prefixCls="banner-user" autoPlay>
       <Element 
          prefixCls="banner-user-elem"
          key="2" 
        >
          <BgElement
            key="bg"
            className="bg"
           style={{
              backgroundImage: `url('https://s.aolcdn.com/hss/storage/midas/37a6a337d6b40e20a6d2ed36672a427b/205837444/terzo-millennio-1-2.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // background: '#64CBCC',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ x: -30, opacity: 0, type: 'from' }}>
           
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ x: -30, opacity: 0, type: 'from', delay: 100 }}
          >
             Reviews for Consumers by Consumers
          </TweenOne>
        </Element>
        
        <Element 
          prefixCls="banner-user-elem"
          key="1" 
        >
          <BgElement
            key="bg"
            className="bg"
           style={{            
              backgroundImage: `url('https://icdn2.themanual.com/image/themanual/lamborghini-huracan-spyder-1-2.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // background: '#64CBCC',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
 
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
             Reviews for Consumers by Consumers
          </TweenOne>
        </Element>
        <Element 
          prefixCls="banner-user-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
        
             backgroundImage: `url('https://images.unsplash.com/photo-1517994112540-009c47ea476b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1981&q=80')`,             
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // background: '#364D79'

            }}
          />
          <TweenOne className="banner-user-title" animation={{ x: -30, opacity: 0, type: 'from' }}>

          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ x: -30, opacity: 0, type: 'from', delay: 100 }}
          >
            Reviews for Consumers by Consumers
          </TweenOne>
        </Element>
        
      </BannerAnim>
       <div id="iconContainer">
          <img src={down} alt="down" />
       </div>
       </div>
       )        

  }
}
export default Banner;