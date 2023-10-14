import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Axios } from "../requests/interceptor";

export const useRecentHospitalAppointment = () => {
  const { token } = useSelector((state: any) => state.user);
  return useQuery(["recentDoctorAppointment"], async () => {
    const { data } = await Axios.get(
      "/api/hospital-appointment/recent-hospital-appointment",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  });
};
