import app from "./index";

export default {
  
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