import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
   // const { auth, isLoading } = useCheckUserAuth()

   useEffect(() => {

      // auth()


   }, [])



   return (
      <div>ProtectedRoute<Outlet /></div>
   )
}

export default ProtectedRoute