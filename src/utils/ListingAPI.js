// import app from "./index";

// export default {
  
//   // Marketplace get all listings of cars (create join table)
//     getAllListing() {
//       app.get("/api/listing/all").then(res => console.log(res.data));
//     },

//     // Get User Listings
//     getUserListing(userId) {
//       app.get(`/api/listing/${userId}`).then(res => console.log(res.data));
//     },

//     // Create new listing
//     postListing() {
//       app.post("/api/listing/new", {msg: "New listing has been created"}).then(res => console.log(res.data));
//     },
  
//     // To update listing
//     updateListing(id) {
//       app.put(`/api/listing/update/${id}`, {msg: "update this listing"}).then(res => {
//         console.log(res.data);
//       })
//     },
  
//     // Delete Listing
//     deleteQuery(id) {
//       app.delete(`/api/listing/delete/${id}`, {msg: "delete this listing"}).then(res => {
//         console.log(res.data);
//       })
//     }
//   }