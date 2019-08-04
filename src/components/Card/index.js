


import React from 'react';

import './style.css';



function Card(){
    return (
<div id = "cardSection">
<div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
    <div className="uk-card-media-left uk-cover-container">
        <img src="https://images01.oe24.at/Aventador_SVJ-roadster2.jpg/bigStory/374.840.502" alt="" uk-cover />
         <canvas width="600" height="400"></canvas>
    </div>
    <div>
        <div className="uk-card-body">
            <h3 className="uk-card-title">Media Left</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>
</div>

<div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
    <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
        <img src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2019/03/21/105807049-1553189463674bugatti.530x298.jpg?v=1553189697" alt="" uk-cover />

    </div>
    <div>
        <div class="uk-card-body">
            <h3 class="uk-card-title">Media Right</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>
</div>
</div>

 )
}


export default Card;