import React from 'react';
import { Icon } from 'antd';
import './style.css';

function Divider(){
    return (




<div className="uk-container-fluid uk-column-1-3 uk-column-divider content">
	<div className = "section">
		<div>
	  	<Icon type="car" className = "icon uk-align-center"/>
	  	</div>
	  <h4>Reviews</h4>
	</div>
	<div>
	</div>
	<div className = "section">
	<div>
		<Icon type="key" className = "icon uk-align-center"/>
	</div>
	<h4>Find a Car</h4>
	</div>
	<div className = "section">
	<div>
		<Icon type="dollar" className = "icon uk-align-center"/>
	</div>
	<h4>Sell Your Car</h4>

	</div>
</div>
    )
}


export default Divider;