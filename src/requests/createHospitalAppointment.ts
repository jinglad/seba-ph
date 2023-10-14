import { Axios } from "./interceptor";

export const createHospitalAppointment = async (
  token: any,
  appointment: any
) => {
  return Axios.post("/api/hospital-appointment", appointment, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
