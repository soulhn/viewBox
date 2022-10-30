import axios from "axios";

const BASE_URL = "http://localhost:3000/";

export default {
  getData: function (name) {
    return axios.get(BASE_URL + `${name}`);
  },
};
