import axios from "axios";

const API = axios.create({
  baseURL: "https://studentfinal-backend.onrender.com/api"
});

export default API;
