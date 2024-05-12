import axios from "axios";
import { baseURL } from "./api";

export const Axios = axios.create({
  baseURL: baseURL,
});
