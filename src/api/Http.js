import axios from "axios";
import { END_POINT } from "@/store/modules/constants";

const http = axios.create({
  baseURL: END_POINT,
  withCredentials: false,
  headers: {
    Accept: "application/json"
  }
})

export default http;
