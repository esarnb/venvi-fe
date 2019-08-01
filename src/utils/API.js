import app from "./index";

export default {

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