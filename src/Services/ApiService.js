import axios from "axios";
import { getCookie } from "./Cookies";
import { DATACONSTANT } from "./Dataconstant";

const baseURL = DATACONSTANT.BASE_URL;
const getStoredAuthToken = () => {
  let c = getCookie(DATACONSTANT.SETCOOKIE);
  return !c ? {} : JSON.parse(c)?.token;
};

function getHeaders() {
  return {
    accept: "application/json",
    authorization: `Bearer ${getStoredAuthToken()}`,
  };
}

// function postHeaders() {
//   return {
//     "content-type": "application/json",
//     //authorization: `Bearer ${getStoredAuthToken()}`,
//   };
// }

function patchHeaders() {
  return {
    authorization: `Bearer ${getStoredAuthToken()}`,
  };
}

export const getRequest = (endpoint, data = null) => {
  let _url = `${baseURL + endpoint}`;
  if (data) {
    _url += `?${new URLSearchParams(data).toString()}`;
  }
  return axios
    .get(_url, {
      headers: getHeaders(),
    })
    .then((res) => res.data)
    .catch((err) => {
      console.error(`Error in get request to endpoint ${endpoint}`, err);
      throw err;
    });
};

export const postRequest = async (endpoint, data = null) => {
  var config = {
    method: "post",
    url: baseURL + endpoint,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return await axios(config)
    .then(function (response) {
      console.log("from API : ", response.data);
      return response.data;
    })
    .catch(function (err) {
      console.error(`Error in post request to endpoint ${endpoint}`, err);
    });
};
export const patchRequest = async (endpoint, data = null) => {
  return await axios
    .patch(baseURL + endpoint, data, { headers: patchHeaders() })
    .then((res) => res.data)
    .catch((err) => {
      console.error(`Error in post request to endpoint ${endpoint}`, err);
      throw err;
    });
};
