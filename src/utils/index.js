import axios from "axios";

export default axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://venvi-passport2.herokuapp.com/",
    responseType: "json"
  });