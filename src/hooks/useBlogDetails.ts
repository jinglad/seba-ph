import { useQuery } from "@tanstack/react-query";
import { Axios } from "../requests/interceptor";

export const useBlogDetails = (id: string | undefined) => {
  return useQuery(
    ["blogs", id],
    async () => {
      const { data } = await Axios(
        `https://ijlsbd.com/qs-blog/wp-json/wp/v2/posts/${id}`
      );
      return data;
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
      refetchOnMount: false,
    }
  );
};
