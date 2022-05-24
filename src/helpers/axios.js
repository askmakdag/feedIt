import axios from 'axios';
import {setupCache} from 'axios-cache-adapter';

// Use your local ip for the API_URL
const API_URL = 'http://192.168.1.33:3000';

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 3 * 1000,
});

// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const axiosHelper = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  adapter: cache.adapter,
});

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
axiosHelper.interceptors.request.use(
  async function (config) {
    try {
      // Request was successful, e.g. HTTP code 200
    } catch (e) {}
    return config;
  },
  async function (error) {
    try {
      // Request failed, e.g. HTTP code 500
    } catch (e) {}
    // Ensure failed requests throw after interception
    return Promise.reject(error);
  },
);

axiosHelper.interceptors.response.use(
  async function (response) {
    try {
      // Response, e.g. HTTP code 200
    } catch (e) {}
    return response;
  },
  async function (error) {
    try {
      // Request failed, e.g. HTTP code 500
    } catch (e) {}
    // Ensure failed requests throw after interception
    return Promise.reject(error);
  },
);

// Step-4: Export the newly created Axios instance to be used in different locations.
export default axiosHelper;
