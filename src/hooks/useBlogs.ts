import { useQuery } from "@tanstack/react-query";
import { Axios } from "../requests/interceptor";

export const useBlogs = () => {
  return useQuery(
    ["blogs"],
    async () => {
      const { data } = await Axios(
        `https://ijlsbd.com/qs-blog/wp-json/wp/v2/posts?order=asc&orderby=date`
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
