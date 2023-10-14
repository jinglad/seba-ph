import { Axios, getOptionsWithToken } from "./interceptor";

// export const getUser = async (token: string, email: string) => {
//   const options = getOptionsWithToken(token, "GET");
//   const response = await fetch(
//     `${process.env.REACT_APP_BASE_URL}/user?email=${email}`,
//     options
//   );
//   if (response.ok) {
//     return response.json();
//   } else return "something went wrong";
// };

export const getUser = async (token: string, email: string) => {
  try {
    const { data } = await Axios.get(`/user?email=${email}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error: any) {
    return error.response;
  }
};

export const getTokenfn = async (email: string) => {
  try {
    const { data } = await Axios.post("/login", { email });
    console.log(data)
    return data;
  } catch (error: any) {
    return error.response;
  }
};
