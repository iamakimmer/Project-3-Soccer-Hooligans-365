import axios from 'axios';

export default axios.create({
  baseURL: "http://api.football-data.org/v2/",
  headers: { "X-Auth-Token": "f500a2871e0e423d9fe1ba869f73155e" }
});
