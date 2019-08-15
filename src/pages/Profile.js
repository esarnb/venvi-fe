import React from 'react';
import UserProfile from '../components/UserProfile';
import { ListCardProfile } from '../components/ListCard';
import Footer from '../components/Footer';
import { ListingAPI, BookmarkAPI } from '../utils/API';

//Component
class Profile extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userList: [],
      userId: 1,
      userBookmark: [],

      values: ""
    }
  }

  componentDidMount(){
    // this.setState({userId: this.props.state.userid.profileID})
    this.userListing();
    // this.userBookmark();
  }

userListing = () =>
{
    ListingAPI.getListingByUser(this.state.userId).then(res=>{
      console.log("all listings databack");
      console.log(res.data);
      // console.log(data.data[0]);
      this.setState({ userList:res.data });
      console.log(this.state.userList)
    });
}

userBookmark = () =>
{
    BookmarkAPI.getBookmarkByUser(this.state.userId).then(res=>{
      console.log("all listings databack");
      // console.log(res.data);
      // console.log(data.data[0]);
      this.setState({ userBookmark:res.data });
      console.log(this.state.userBookmark)
    });
}

handleDelete = (id) => {
  ListingAPI.deleteListing(id).then(res=>{
    console.log("deleted file");
    this.userListing();
  })
}

// handleDeleteBookmark = (id) => {
//   BookmarkAPI.deleteBookmark(id).then(res=>{
//     console.log("bookmark removed");
//     this.userBookmark();
//   })
// }

handleEdit = event => {
  console.log("id", event.target.id)
  console.log("values", this.state.values)
  console.log("we got here")
  var listing = 
  {
    price: this.state.values
  }
  ListingAPI.editListing(event.target.id, listing).then(res=>{
    console.log("edited listing", res.data);
    this.userListing();
  })
}

editChange = event => {
  this.setState({
    values: event.target.value
  })
}

  render() {
    return (
      <React.Fragment>
        <div className= "wrapper2">
          <UserProfile userid={this.state.userId}/>
          <h2>My Listings</h2>
          <span id="line"> </span>
          <div id="user-list">
          {this.state.userList.map(list =>(
            <ListCardProfile key={list.id}
            id={list.id}
            user={list.UserId}
            image={list.image}
            make={list.make}
            model={list.model}
            price={list.price}
            year={list.year}
            vin={list.vin}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit} 
            editchange={this.editChange}
            />
          ))}
          </div>
          {/* <React.Fragment id="bookmark-list">
            <h2>My Favorites</h2>
            <span id="line"> </span>
          {this.state.userBookmark.map(bookmark =>(
            <ListCardBookmark key={bookmark.id}
            id={bookmark.id}
            image={bookmark.image}
            make={bookmark.make}
            model={bookmark.model}
            price={bookmark.price}
            year={bookmark.year}
            vin={bookmark.vin}
            handleDelete={this.handleDelete}
            />
          ))}
          </React.Fragment> */}
           </ div>
          <Footer />
      </React.Fragment>
    );
  }
}

export default Profile;