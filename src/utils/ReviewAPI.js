// import app from "./index";

// export default {
  
//   // Reviews of specific car
//   getCarReview(vehicleId) {
//     app.get(`/api/review/${vehicleId}`).then(res => console.log(res.data));
//   },

//   // Reviews all reviews of cars
//   getAllReviews() {
//     app.get("/api/review").then(res => console.log(res.data));
//   },

//   //Create new review
//     postReview() {
//       app.post(`/api/review/new`, {msg: "Review has been added"}).then(res => console.log(res.data));
//     },
  
//   //Stretch Goal
//     deleteQuery(reviewId) {
//       app.delete(`/api/review/delete/${reviewId}`, {msg: "delete this review"}).then(res => {
//         console.log(res.data);
//       })
//     }
//   }