import app from "./index";

// module.exports = {

  /*============================================================ 
                          LISTING API
    ============================================================*/
  export const Listing = {
  // Marketplace get all listings of cars (create join table)
  getAllListing() {
    app.get("/api/listing/all").then(res => console.log(res.data));
  },

  // Get User Listings
  getUserListing(userId) {
    app.get(`/api/listing/${userId}`).then(res => console.log(res.data));
  },

  // Create new listing
  postListing() {
    app.post("/api/listing/new", {msg: "New listing has been created"}).then(res => console.log(res.data));
  },

  // To update listing
  updateListing(id) {
    app.put(`/api/listing/update/${id}`, {msg: "update this listing"}).then(res => {
      console.log(res.data);
    })
  },

  // Delete Listing
  deleteQuery(id) {
    app.delete(`/api/listing/delete/${id}`, {msg: "delete this listing"}).then(res => {
      console.log(res.data);
    })
  },
}
  /*============================================================ 
                          REVIEW API
    ============================================================*/
export const Review = {
  // Reviews of specific car
  getCarReview(vehicleId) {
    app.get(`/api/review/${vehicleId}`).then(res => console.log(res.data));
  },

  // Reviews all reviews of cars
  getAllReviews() {
    app.get("/api/review").then(res => console.log(res.data));
  },

  //Create new review
  postReview() {
    app.post(`/api/review/new`, {msg: "Review has been added"}).then(res => console.log(res.data));
  },

  //Stretch Goal
  deleteQuery(reviewId) {
    app.delete(`/api/review/delete/${reviewId}`, {msg: "delete this review"}).then(res => {
      console.log(res.data);
    })
  },
}
  /*============================================================ 
                          USER API
    ============================================================*/

  export const UserAPI = {
  // To return user profile page
  getProfile() {
    app.get("/api/user/:user").then(res => console.log(res.data));
  },

// To create user account in our database
  postQuery() {
    app.post("/api/user/new", {msg: "Hello Buddy"}).then(res => console.log(res.data));
  },

// Updates user profile pic using AWS
  putProfile(id) {
    app.put(`/api/user/update/${id}`, {msg: "update profile pic"}).then(res => {
      console.log(res.data);
    })
  },

  // Strech Goal to delete user account from our database
  deleteQuery(id) {
    app.delete(`/api/vehicle/delete/${id}`, {msg: "I no longer want it"}).then(res => {
      console.log(res.data);
    })
  }
}
  /*============================================================ 
                          VEHICLE API
    ============================================================*/
export const Vehicle = {
  // Reviews get all reviews of cars
  getVehicles() {
    app.get("/api/review").then(res => console.log(res.data));
  },

  postQuery() {
    app.post("/api/vehicle/new", {msg: "Vehicle has been added"}).then(res => console.log(res.data));
  },
}
  
  /*============================================================ 
                          AUTH API
    ============================================================*/
export const Auth = {
  login() {
    app.get("/auth/google/login").then(res => console.log("AUTH GET: ", res.data, res));
    
  },
}


  
  /*============================================================ 
                          TEST API
    ============================================================*/

export const Test = {
  getResponse() {
    app.get("/api/vehicle/all").then(res => console.log(res.data));
  },

  postQuery() {
    app.post("/api/vehicle/new", {msg: "Vehicle has been added"}).then(res => console.log(res.data));
  },

  putQuery(id) {
    app.put(`/api/vehicle/update/${id}`, {msg: "update this listing"}).then(res => {
      console.log(res.data);
    })
  },

  deleteQuery(id) {
    app.delete(`/api/vehicle/delete/${id}`, {msg: "delete this listing"}).then(res => {
      console.log(res.data);
    })
  }
}

export default ".";
  
// }