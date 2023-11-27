import axios from "axios";

export const managerClient = axios.create({
  baseURL: `http://eizen-2000-0002/manager-api`
});
