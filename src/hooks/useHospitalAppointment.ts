import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Axios } from "../requests/interceptor";

export const useHospitalAppointment = () => {
  const { token } = useSelector((state: any) => state.user);
  return useQuery(
    ["hospitalAppointment"],
    async () => {
      const { data } = await Axios.get(
        "/api/hospital-appointment/hospital-appointment-by-user-id",
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
