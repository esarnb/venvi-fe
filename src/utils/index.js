import axios from "axios";

export default axios.create({
  // baseURL: "https://cors-anywhere.herokuapp.com/https://venvi-be.herokuapp.com/",
  baseURL: "https://cors-anywhere.herokuapp.com/https://venvi-passport2.herokuapp.com/",
  responseType: "json"
  // withCredentials: true
});


// export default axios.create({
//   baseURL: "https://cors-anywhere.herokuapp.com/http://127.0.0.1:3001/",
//   responseType: "json",
//    withCredentials: true
// });
