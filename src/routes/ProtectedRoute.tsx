<<<<<<< HEAD
import { toast } from "@/components/ui/use-toast";
import { useGetUser } from "@/features/user/user";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
   const { userResponse, isLoading, isError } = useGetUser();
   const navigate = useNavigate();

   useEffect(() => {
      if (!isLoading && userResponse) {
         const { data: { data }, } = userResponse;
         console.log("data=>",data);
         
      }
      if (isError) {
=======
import { toast } from '@/components/ui/use-toast'
import { useGetUser } from '@/features/user/user'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute = () => {
   const { userResponse, isLoading,isError } = useGetUser()
 const navigate =   useNavigate()

   useEffect(() => {

      if (!isLoading) {
         // const { data: { data } } = userResponse;
         // console.log(data);
         
      }
      if(isError){
>>>>>>> d4e25eb (pull from new design branch)
         toast({
            description: "You need to Create the account First!",
            variant: "destructive",
         });
<<<<<<< HEAD
         navigate("/login");
      }
   }, [userResponse, isLoading, isError, navigate]);
=======
         navigate("/login")
      }

   }, [userResponse, isLoading, isError, navigate])


>>>>>>> d4e25eb (pull from new design branch)

   return (
      <>
         <Outlet />
      </>
   );
};

export default ProtectedRoute;
