import axios from 'axios'

function createAxiosAuthMiddleware() {
  return ({ getState }) => next => (action) => {
    const { token } = getState().authToken;
    axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL
    axios.defaults.headers.common.Accept = 'application/json'
    axios.defaults.responseType = 'json'
    axios.defaults.headers.common.Authorization = token
      ? `Token ${token}`
      : null;

    return next(action);
  };
}

const axiosAuth = createAxiosAuthMiddleware();

export default axiosAuth;
