import { useQuery } from "@tanstack/react-query";
import { getUser, getUsers } from "../requests/getUser";
import exp from "constants";
import { setUsers } from "../components/redux/userSlice";

export const useUser = ({ token, email }: any) => {
  return useQuery(["user"], async () => await getUser(token, email), {
    enabled: !!token && !!email,
    refetchOnWindowFocus: false,
    retry: false,
  });
};

// export const useToken = ({email}:{email:string}) => {
//   return useQuery(['token'], async () => await getToken(email), {
//     enabled: !!email,
//     refetchOnWindowFocus: false,
//     retry: false,
//   })
// }

export const useUsers = ({
  token,
  dispatch,
}: {
  token: string;
  dispatch: Function;
}) => {
  return useQuery(["users"], async () => await getUsers(token), {
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnMount: false,
    onSuccess: (data) => {
      dispatch(setUsers(data?.users));
    },
  });
};
