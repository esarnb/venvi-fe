import app from "./index";

/*============================================================ 
                        USER API
  ============================================================*/

export const UserAPI = {

  // To return user profile page
  getAllUsers() {
    return app.get("/api/users").then(res => console.log(res.data));
  },


  // To create user account in our database
  addUser() {
    return app.post("/api/users", { msg: "Hello Buddy" }).then(res => console.log(res.data));
  },

   // To return user profile page
  getUser(id) {
    return app.get("/api/users/:id").then(res => console.log(res.data));
  },

  // Updates user profile pic using AWS
  editUser(id) {
    return app.put(`/api/users/${id}`, { msg: "update profile" }).then(res => {
      console.log(res.data);
    })
  },

  // Updates user profile pic using AWS
  updateListingPhoto(id) {
    return app.put(`/api/users/profilephoto/${id}`, { msg: "update profile pic" }).then(res => {
      console.log(res.data);
    })
  },

  // Strech Goal to delete user account from our database
  deleteQuery(id) {
    return app.delete(`/api/users/${id}`, { msg: "I no longer want it" }).then(res => {
      console.log(res.data);
    })
  }
}


/*============================================================ 
                        LISTING API
  ============================================================*/

export const ListingAPI = {

  // Marketplace get all listings of cars (create join table)
  getAllListing() {
    return app.get("/api/listings");
  },


  // Create new listing
  postListing(listing) {

    return app.post("/api/listings", listing);
  },

  // To update listing
  editListing(id) {
    return app.put(`/api/listings/${id}`, { msg: "update this listing" }).then(res => {
      console.log(res.data);
    })
  },

  updatePhoto(id) {
    return app.put(`/api/listings/listingphoto/${id}`, { msg: "update this listing photo" }).then(res => {
      console.log(res.data);
    })
  },


  createListingUrl(listing) {
    console.log("hitting api before send to server")
    console.log("listing", listing)
    return app.post("/api/listings/createurl", listing);
  },

  // Delete Listing
  deleteListing(id) {
    return app.delete(`/api/listings/${id}`, { msg: "delete this listing" }).then(res => {
      console.log(res.data);
    })
  },

  // Get User Listings
  getListingByUser(userId) {
    return app.get(`/api/listings/user/${userId}`);
  },

  // Get Vehicle Listings
  getListingByVehicle(make, model, year) {
    return app.get(`/api/listings/vehicle/${make}/${model}/${year}`);

},
}




/*============================================================ 
                        BOOKMARK API
  ============================================================*/

export const BookmarkAPI = {

  //get all bookmarks of cars
  getAllBookmark() {
    return app.get("/api/bookmarks").then(res => console.log(res.data));
  },


  // Create new Bookmark
  addBookmark() {
    return app.post("/api/bookmarks", { msg: "New bookmark has been created" }).then(res => console.log(res.data));
  },

  getBookmark(id) {
    return app.put(`/api/bookmarks/${id}`, { msg: "get bookmark by id" }).then(res => {
      console.log(res.data);
    })
  },

  deleteBookmark(id) {
    return app.delete(`/api/bookmarks/${id}`, { msg: "delete this listing" }).then(res => {
      console.log(res.data);
    })
  },

  getBookmarkByUser(id) {
    return app.put(`/api/bookmarks/user/${id}`, { msg: "get bookmarks by userid" }).then(res => {
      console.log(res.data);
    })
  }
}




/*============================================================ 
                        VEHICLE API
  ============================================================*/

export const VehicleAPI = {

  // get all vehicles
  getAllVehicles() {
    return app.get("/api/vehicles").then(res => console.log(res.data));
  }, 



  getVehicleByType(make, model, year) {
    return app.get(`/api/vehicles/vehicle/${make}/${model}/${year}`);

},

  addVehicle() {
    return app.post("/api/vehicles/", { msg: "New Vehicle has been created" }).then(res => console.log(res.data));
  },

 
  getVehicles(id) {
    return app.get(`/api/vehicles/${id}`).then(res => console.log(res.data));
  },

  updateVehicle(id) {
    return app.put(`/api/vehicles/${id}`, { msg: "update this Vehicle" }).then(res => {
      console.log(res.data);
    })
  },

  deleteVehicle(id) {
    return app.delete(`/api/vehicles/${id}`, { msg: "delete this Vehicle" }).then(res => {
      console.log(res.data);
    })
  }
}



/*============================================================ 
                        REVIEW API
  ============================================================*/

export const ReviewAPI = {

   // Reviews all reviews of cars
  getAllReviews() {
    return app.get("/api/reviews").then(res => console.log(res.data));
  },

   //Create new review
  addReview() {
    return app.post(`/api/reviews`, { msg: "Review has been added" }).then(res => console.log(res.data));
  },

  getReviewById(id) {
    return app.get(`/api/reviews/${id}`).then(res => console.log(res.data));
  },

  deleteReview(id) {
    return app.delete(`/api/reviews/${id}`, { msg: "delete this review" }).then(res => {
      console.log(res.data);
    })
  },

  getReviewByVehicle(id) {
    return app.get(`/api/reviews/vehicle/${id}`).then(res => console.log(res.data));
  },
}

/*============================================================ 
                        AUTH API
  ============================================================*/

  export const Auth = {

    //
    login() {
      console.log("LOGIN ONCLICK");
      
      window.location.href = "https://venvi-passport2.herokuapp.com/auth/google/login"
  
      app.get("/auth/google").then((res) => {
        console.log("RESULT OF AUTH: ", res);
        
      })
  
    },
  }
  



/*============================================================ 
                        TEST API
  ============================================================*/

export const Test = {

  //Testing CRUD
  getResponse() {
    app.get("/api/test/all").then(res => console.log(res.data));
  },

  postQuery() {
    app.post("/api/test/new", { msg: "Vehicle has been added" }).then(res => console.log(res.data));
  },

  putQuery(id) {
    app.put(`/api/test/update/${id}`, { msg: "update this listing" }).then(res => {
      console.log(res.data);
    })
  },
  deleteQuery(id) {
    app.delete(`/api/test/delete/${id}`, { msg: "delete this listing" }).then(res => {
      console.log(res.data);
    })
  }
}

export default ".";