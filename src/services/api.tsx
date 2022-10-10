import axios from "axios";
import config from "../services/config";

const api = axios.create({
  baseURL: config.server.hostname,
});

export default api;
