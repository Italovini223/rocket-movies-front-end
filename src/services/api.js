import axios from "axios";
export const api = axios.create({
  baseURL: "https://moyrocketmovies-api.herokuapp.com",
})