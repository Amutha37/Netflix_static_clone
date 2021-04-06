import axios from "axios";
// const axios = require("axios");
// use the base url to make request to movie database

const axiosInstance = axios.create({
  baseUrl: "https://api.themoviedb.org/3",
});
// export default instance;

// var axios = require('axios');

// var axiosInstance = axios.create({
//   baseURL: 'https://domain.com/foo/bar',
//   /* other custom settings */
// });

export default axiosInstance;
