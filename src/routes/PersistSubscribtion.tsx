import { useCheckUserAccountIsConnected } from '@/features/user/user';
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const PersistSubscribtion = () => {
   const { userResponse, isSuccess } = useCheckUserAccountIsConnected()
   const navigate = useNavigate();

   useEffect(() => {
      if (isSuccess) {
         const data = userResponse?.data;
         const { resy_signed_in } = data
         if (!resy_signed_in) {
            return navigate("/connect-accounts")
         }
      }
      
   }, [isSuccess, navigate, userResponse]);

   return <Outlet />;
}

export default PersistSubscribtion