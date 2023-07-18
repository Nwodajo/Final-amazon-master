import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.rainforestapi.com/",
});

export default instance;
