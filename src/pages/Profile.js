import React from 'react';
import Container from '../components/Container';
import UserProfile from '../components/UserProfile';
import { ListCardProfile } from '../components/ListCard';
import Footer from '../components/Footer';
import { ListingAPI } from '../utils/API';

//Component
class Profile extends React.Component {

state = {
  userList: []
}

  componentDidMount(){
  this.userListing();
}

userListing = () =>
{
  let userId = 3;
    ListingAPI.getListingByUser(userId).then(res=>{
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
        <div className= "wrapper2">
        <UserProfile />
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
          </ div>
          <Footer />
      </div>
    );
  }
}

export default Profile;