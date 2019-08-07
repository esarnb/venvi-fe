import React from 'react';
import Container from '../components/Container';
import UserProfile from '../components/UserProfile';
import { ListCardProfile } from '../components/ListCard';
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
  let userId = 2;
    ListingAPI.getListingByUser(userId).then(res=>{
      console.log("all listings databack");
      console.log(res.data);
      // console.log(data.data[0]);
      this.setState({ userList:res.data });
      console.log(this.state.userList)
    });
}

  render() {
    return (
      <div>
        <Container>
          <UserProfile />
          {this.state.userList.map(list =>(
          <ListCardProfile key={list.id}
            image={list.image}
            make={list.make}
            model={list.model}
            price={list.price}
            year={list.year}
            vin={list.vin} />
          ))}
        </Container>
      </div>
    );
  }
}

export default Profile;