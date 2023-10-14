import { useQuery } from "@tanstack/react-query"
import {  getUser } from "../requests/getUser"

export const useUser = ({token, email}:any) => {
  return useQuery(['user'], async () => await getUser(token, email), {
    enabled: !!token && !!email,
    refetchOnWindowFocus: false,
    retry: false,
  })
}

// export const useToken = ({email}:{email:string}) => {
//   return useQuery(['token'], async () => await getToken(email), {
//     enabled: !!email,
//     refetchOnWindowFocus: false,
//     retry: false,
//   })
// }