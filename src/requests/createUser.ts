import { User } from "../models/User";
import { Axios, getOptionsWithOutToken } from "./interceptor";

// export const createUser = async (user: User) => {
//   const options:any = getOptionsWithOutToken("POST");
//   options.body = JSON.stringify(user);
//   const response = await fetch(`${process.env.REACT_APP_BASE_URL}/register`,options);
//   if (response.status === 201) {
//     return response.json();
//   } else {
//     return "Something went wrong. Please try again later";
//   }
// };

export const createUser = async (user: User) => {
  // try {
  const { data } = await Axios.post("/register", user);
  return data;
  // } catch (error:any) {
  //   return error.response;
  // }
};
