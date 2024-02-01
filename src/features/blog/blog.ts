import { baseUrl } from "@/config/baseUrl";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export function useGetAllblogs() {
  const {
    data: blogs,
    isPending: isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: (): Promise<AxiosResponse> => {
      return axios.get(`${baseUrl}/api/blog/all`);
    },
  });
  return { blogs, isLoading, isSuccess, isError, error };
}


export function useGetSingleBlog() {
   const {
      data: singleBlog,
      isPending: isLoading,
      isSuccess,
      isError,
      error,
   } = useQuery({
      queryKey: ["blogs"],
      queryFn: (slug): Promise<AxiosResponse> => {
         return axios.get(`${baseUrl}/api/blog/${slug}`);
      },
   });
   return { singleBlog, isLoading, isSuccess, isError, error };
}
