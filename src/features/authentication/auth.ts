import axios from "axios";
import { useMutation } from "@tanstack/react-query";


export const useSignup = () => {
   const { mutate: signup, isPending: isloading } = useMutation({
      mutationFn: ({ email, password }: { email: string, password: string }): Promise<number> => {
         return axios.post('/signup', { email, password })
      },
      onSuccess: (user) => {
         console.log("sucess signup", user)
      }
   })
   return { signup, isloading }
}

export const useLogin = () => {
   const { mutate: login, isPending: isloading } = useMutation({
      mutationFn: ({ email, password }: { email: string, password: string }): Promise<number> => {
         return axios.post('/register', { email, password })
      },
      onSuccess: (user) => {
         console.log("sucess login", user)
      }
   })
   return { login, isloading }
}
