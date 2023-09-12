import axios from "axios";

export const managerClient = axios.create({
  baseURL: "http://localhost/manager-api" 
});
