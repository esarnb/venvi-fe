import React from 'react';
// import ReactDOM from 'react-dom';
import { Icon, Spin} from 'antd';
import './style.css';

function Divider(){
    return (




<div className="uk-container-fluid uk-column-1-3 uk-column-divider content">
	<div className = "section">
		<div >
	  	<Icon type="car" className = "icon uk-align-center"/>
	  </div>
	  <h4>Chloe</h4>
	  <p>From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home.</p>
	</div>

	<div>
	<Spin />

	</div>


	<div className = "section">
	<div>
		<Icon type="key"  className = "icon uk-align-center"/>
	</div>
	
	<h4>Supreme</h4>
	<p>Privatize a pool, take a Japanese bath or wake up in of garden… your Sundays will not be alike.</p>
	</div>

	<div className = "section">
	<div>
		<Icon type="smile" className = "icon uk-align-center"/>
	</div>
	<h4>Leader</h4>

	<p>By registering, you will access specially negotiated rates that you will not find anywhere else.</p>
	</div>
</div>
    )
}


export default Divider;