import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Axios } from "../requests/interceptor";

export const useDoctorAppointmentById = (id: string) => {
  const { token } = useSelector((state: any) => state.user);
  return useQuery(
    ["doctorAppointmentById", id],
    async () => {
      const { data } = await Axios.get(`/api/doctor-appointment/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
    {
      enabled: !!id,
    }
  );
};
