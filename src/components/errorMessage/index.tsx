
const index = ({ message }: { message: string }) => {
   return (
      <div className="py-2 text-sm rounded-lg  text-error relative" role="alert">
         <span className="font-medium absolute">{message}</span>
      </div>
   )
}

export default index