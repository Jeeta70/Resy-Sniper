import { CreateAccountCard } from "@/components";

const ConnectAccount = () => {
   return (
     <div className="h-svh ">
       <div className="mb-3 sm:mb-0 sm:h-1/4 text-center">
         <h1 className="mb-3 sm:mb-14 text-[#F94633] text-5xl font-bold">
           RESY SNIPER
         </h1>
         <span>
           <h2 className="font-bold text-3xl">Coneect Account</h2>
           <p className="text-[#12171A]">
             At least one accoint should be connected
           </p>
         </span>
       </div>
       <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-10">
         <CreateAccountCard
           heading={"Resy"}
           cardStyle={"w-[350px] ml-0 sm:ml-auto"}
         />
         <CreateAccountCard
           heading={"OpenTable"}
           cardStyle={"w-[350px] mr-0 sm:mr-auto"}
         />
       </div>
     </div>
   );
};

export default ConnectAccount;
