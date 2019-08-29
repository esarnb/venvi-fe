import React from 'react';
import UserProfile from '../components/UserProfile';
import { ListCardProfile, ListCardBookmark } from '../components/ListCard';
import Footer from '../components/Footer';
import { ListingAPI, BookmarkAPI, UserAPI } from '../utils/API';
import UserSetting from '../components/UserSettings';



//Component
class Profile extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userList: [],
      userId: props.id,
      userName: props.name,
      // userId: 1,
      photo: props.photo,
      userBookmarkList: [],
      values: ""
    }
  }

  componentDidMount(){
    // this.setState({userId: this.props.state.userid.profileID})
    this.userListing();
    this.userBookmark();
  }

userListing = () =>
{
    ListingAPI.getListingByUser(this.state.userId).then(res=>{
      console.log("all listings databack");
      console.log(res.data);
      // console.log(data.data[0]);
      this.setState({ userList:res.data });
      var userlist= this.state.userList;
      console.log(userlist)
    });
}

userBookmark = () =>
{
  console.log(this.state.userId)
    BookmarkAPI.getBookmarkByUser(this.state.userId).then(res=>{
      console.log(this.state.userId);
      console.log("all bookmarks databack");
      console.log(res.data);
       var bookmarks = res.data;

      if (!bookmarks){
        console.log("no bookmark data")
      }
      else {
      bookmarks.map(bookmark =>
      {
        var UserId = bookmark.Listing.UserId;
        console.log(UserId);
        UserAPI.getUser(UserId).then(res=>{
          console.log(res.data);
          bookmark.Listing.phone = res.data.phone;
          bookmark.Listing.location = res.data.location;
          bookmark.Listing.sellerName = res.data.name;
          bookmark.Listing.email = res.data.email;
          console.log(bookmark);
          console.log(bookmark.Listing.sellerName)
    })     
      })
      setTimeout(
       () =>
      {
        console.log("after set state", "bookmarks", bookmarks);
        this.setState({ userBookmarkList:bookmarks });
      }
, 100
      )
    }
    });

}

handleDelete = (id) => {
  ListingAPI.deleteListing(id).then(res=>{
    console.log("deleted file");
    this.userListing();
  })
}

handleDeleteBookmark = (id) => {
  BookmarkAPI.deleteBookmark(id).then(res=>{
    console.log("bookmark removed");
    this.userBookmark();
  })
}

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
          <UserProfile userid={this.state.userName} photo={this.state.photo}/>
          <h2 id="list-title">My Listings </h2>
          <UserSetting/>
          <span id="line"> </span>
          <div id="user-list">
          {this.state.userList ? this.state.userList.map(list =>(
            <ListCardProfile key={list.id}
            id={list.id}
            user={list.UserId}
            image={list.image}
            make={list.make}
            model={list.model}
            price={list.price}
            mileage={list.mileage}
            year={list.year}
            vin={list.vin}
            phone={list.User.phone}
            email={list.User.email}
            seller={list.User.name}
            location={list.User.location}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit} 
            editchange={this.editChange}
            />
          )) : <h6 id="list-msg">Oops... looks like you don't have any listings</h6>}
          </div>
            <h2 id="fav-title">My Favorites</h2>
            <span id="line"> </span>
            <div id="bookmark-list">
          {this.state.userBookmarkList ? this.state.userBookmarkList.map(bookmark =>(
            <ListCardBookmark key={bookmark.id}
            id={bookmark.id}
            user={bookmark.UserId}
            image={bookmark.Listing.image}
            make={bookmark.Listing.make}
            model={bookmark.Listing.model}
            price={bookmark.Listing.price}
            year={bookmark.Listing.year}
            vin={bookmark.Listing.vin}
            phone={bookmark.Listing.phone}
            email={bookmark.Listing.email}
            seller={bookmark.Listing.sellerName}
            location={bookmark.Listing.location}
            handleDeleteBookmark={this.handleDeleteBookmark}
            />
          )) : <h6 id="fav-msg"> Have prospective cars in mind? <br/><br/>Add some of your favorites from Market page </h6>}

           </div>
          </div>
          <Footer />
      </React.Fragment>
    );
  }
}

export default Profile;