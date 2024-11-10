import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estate-explorer-lkun.onrender.com",
  withCredentials: true,
});

export default apiRequest;
