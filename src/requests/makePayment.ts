import { Axios } from "./interceptor";

export const makePayment = async (token: any) => {
  try {
    return Axios.get("/api/payment", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const makePaymentHospital = async (token: any) => {
  try {
    return Axios.get("/api/payment/hospital", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
