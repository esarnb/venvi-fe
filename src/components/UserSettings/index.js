import React, { Component } from "react";
import { Textarea, Modal, Button } from "react-materialize";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./style.css";



class UserSetting extends Component {
	state = {
        location:"",
        phone:""
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
    }
    
    updateUser = () => {

    }

	render() {
		return (			
                <Modal header="User Setting" fixedFooter trigger={<AccountCircleIcon className="userSetting">
                    </AccountCircleIcon>}
                    actions={<Button modal="close" className="saveChanges" onClick={this.updateUser}>Save Changes</Button>}>
                        <Textarea placeholder="Location" value={this.state.location} name="location" onChange={this.handleChange}/>
                        <Textarea placeholder="Phone" value={this.state.phone} name="phone" onChange={this.handleChange}/>
                    </Modal>
		)
	}
}

export default UserSetting;