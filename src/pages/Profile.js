import React from 'react';
import Container from '../components/Container';
import UserProfile from '../components/UserProfile';
import { ListCardProfile } from '../components/ListCard';
import { ListingAPI } from '../utils/API';

//Component
class Profile extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userList: [],
      userId: 3
    }
  }

  componentDidMount(){
    // this.setState({userId: this.props.state.userid.profileID})
    this.userListing();
  }

userListing = () =>
{
  ;
    ListingAPI.getListingByUser(this.state.userId).then(res=>{
      console.log("all listings databack");
      console.log(res.data);
      // console.log(data.data[0]);
      this.setState({ userList:res.data });
      console.log(this.state.userList)
    });
}

handleDelete = (id) => {
  ListingAPI.deleteListing(id).then(res=>{
    console.log("deleted file");
    this.userListing();
  })
}

handleEdit = (id,price) => {
  console.log("id", id)
  console.log("we got here")
  ListingAPI.editListing(id,price).then(res=>{
    console.log("edited listing", res.data);
  })
}

  render() {
    return (
      <div>
        <Container>
        <UserProfile userid={this.state.userId}/>
        </Container>
          <div id="user-list">
          {this.state.userList.map(list =>(
          <ListCardProfile key={list.id}
            id={list.id}
            image={list.image}
            make={list.make}
            model={list.model}
            price={list.price}
            year={list.year}
            vin={list.vin}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit} />
          ))}
          </div>
      </div>
    );
  }
}

export default Profile;