
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Spin} from 'antd';
import './style.css';


function Footer(){
    return (

<div className="uk-container-fluid uk-column-1-2 uk-column-divider" id="footerContent">

	<div className = "footerSection">
		<div >
	  	<Icon type="car" className = "icon uk-align-center"/>
	  	 <p>© 2019 Copyright VENVI. All Rights Reserved.</p>
	  </div>
	  <h4>Chloe</h4>
	 
	</div>

	<div className = "footerSection">
		<Icon type="key"  className = "icon uk-align-center"/>
	</div>
	
</div>
    )
}


export default Footer;