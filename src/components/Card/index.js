


import React from 'react';

import './style.css';



function Card(){
    return (
<div>
<div id = "cardSection">
    <div className="uk-card uk-card-default uk-column-1-2 uk-column-divider">
        <div className="uk-card-media-left" id="imageSection">
            <img src="https://st.motortrend.com/uploads/sites/10/2017/08/2018-porsche-panamera-turbo-hatchback-angular-front.png" alt="" />
        </div>
        <div className="uk-card-media-right">Hello</div>
    </div>
</div>
<div id = "cardSection">
    <div className="uk-card uk-card-default uk-column-1-2 uk-column-divider">
    	<div className="uk-card-media-left">
    	Hello</div>
        <div className="uk-card-media-right" id="imageSection">
            <img src="https://www.vehicledynamicsinternational.com/wp-content/uploads/2019/01/2019-bmw-7-series.png" alt="" />
        </div>
       
    </div>
</div>

</div>

 )
}


export default Card;