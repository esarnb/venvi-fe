import React from 'react';
import "./style.css";
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
           BUY ...
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
          SELL ...
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
        
             backgroundImage: `url('https://cdn.motor1.com/images/mgl/BVx1v/s1/ferrari-812-superfast.jpg')`,             
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // background: '#364D79'

            }}
          />
          <TweenOne className="banner-user-title" animation={{ x: -30, opacity: 0, type: 'from' }}>
          ... AND REVIEW
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ x: -30, opacity: 0, type: 'from', delay: 100 }}
          >
            Reviews for Consumers by Consumers
          </TweenOne>
        </Element>
        
      </BannerAnim>
       </div>
       )        
  }
}
export default Banner;