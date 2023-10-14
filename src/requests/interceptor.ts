import axios from "axios";

export const BASEURL = process.env.REACT_APP_BASE_URL;

export const getOptionsWithToken = (token: string, method: string) => {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
};

export const getOptionsWithOutToken = (method: string) => {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const Axios = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
