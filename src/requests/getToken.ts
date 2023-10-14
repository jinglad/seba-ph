import { Axios, getOptionsWithOutToken } from "./interceptor";

export const getToken = async () => {
  const options = getOptionsWithOutToken("GET");
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/login`,
    options
  );
  if (response.ok) {
    return response.json();
  } else {
    return "Something went wrong with your login.";
  }
};

export const login = async (user: any) => {
  // try {
  const { data } = await Axios.post("/login", user);
  return data;
  // } catch (error: any) {
  //   return error.response;
  // }
};
