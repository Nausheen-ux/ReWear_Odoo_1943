// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // replace with production URL when ready
  withCredentials: true,
});

export default instance;
