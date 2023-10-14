import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Axios } from "../requests/interceptor";

export const useDoctorAppointment = () => {
  const { token } = useSelector((state: any) => state.user);
  return useQuery(
    ["doctorAppointment"],
    async () => {
      const { data } = await Axios.get(
        "/api/doctor-appointment/doctor-appointment-by-user-id",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    }
  );
};
