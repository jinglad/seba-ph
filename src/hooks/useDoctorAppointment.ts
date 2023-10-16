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

export const useDoctorAppointments = ({
  token,
  page,
}: {
  token: string;
  page: number;
}) => {
  return useQuery(
    ["doctorAppointments", page],
    async () => {
      const { data } = await Axios.get("/api/doctor-appointment", {
        headers: {
          authorization: `Bearer ${token}`,
        },
        params: {
          page,
          pageSize: 10,
        },
      });
      return data;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    }
  );
};
