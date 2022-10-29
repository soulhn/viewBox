import axios from "axios";

const BASE_URL = "http://localhost:3000/";

export default {
  getAdress: function (name) {
    return axios.get(BASE_URL + `${name}`);
  },
};
