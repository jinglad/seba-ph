import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Axios } from "../requests/interceptor";

export const useRecentDoctorAppointment = () => {
  const { token } = useSelector((state: any) => state.user);
  return useQuery(["recentDoctorAppointment"], async () => {
    const { data } = await Axios.get(
      "/api/doctor-appointment/recent-doctor-appointment",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  });
};
