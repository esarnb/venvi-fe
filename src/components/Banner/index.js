import React from 'react';
import "./style.css";


import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;


class Banner extends React.Component {

  render(){
    return (
      <BannerAnim prefixCls="banner-user" autoPlay>
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
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            VENVI
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
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
              backgroundImage: `url('https://images.unsplash.com/photo-1508500444513-ae7b32a20b84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // background: '#64CBCC',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            VENVI
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
             Reviews for Consumers by Consumers
          </TweenOne>
        </Element>
        
      </BannerAnim>);
  }
}
export default Banner;