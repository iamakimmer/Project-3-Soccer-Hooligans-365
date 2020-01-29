import axios from "axios";
import {NotificationManager} from "react-notifications";
const TOKEN = "f500a2871e0e423d9fe1ba869f73155e";

export function get(url) {
  return axios.get(url);
}

export function post(url, message) {
  return axios.post(url, message);
}

axios.interceptors.request.use(
  configuration => {
    configuration.headers["X-Auth-Token"] = `${TOKEN}`;
    return configuration;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(null,error=>{
  NotificationManager.error("Allowed to 10 calls per minute !");
})