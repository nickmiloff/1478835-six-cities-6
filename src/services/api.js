import * as axios from 'axios';

const BASE_URL = `https://6.react.pages.academy/six-cities/`;
const REQUEST_TIMEOUT = 5000;
const UNAUTHORIZED_CODE = 401;

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": `application/json;charset=utf-8`
    },
    timeout: REQUEST_TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === UNAUTHORIZED_CODE) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
