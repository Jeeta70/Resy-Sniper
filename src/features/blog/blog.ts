import { baseUrl } from "@/config/baseUrl";
import { IBlog } from "@/types/blog";
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
    queryFn: (): Promise<AxiosResponse<IBlog[]>> => {
      return axios.get(`${baseUrl}/api/blog/all`);
    },
  });
  return { blogs, isLoading, isSuccess, isError, error };
}


export function useGetSingleBlog(slug:string) {
   const {
      data: singleBlog,
      isPending: isLoading,
      isSuccess,
      isError,
      error,
   } = useQuery({
      queryKey: ["blogs"],
      queryFn: (): Promise<AxiosResponse> => {
         return axios.get(`${baseUrl}/api/blog/${slug}`);
      },
   });
   return { singleBlog, isLoading, isSuccess, isError, error };
}
