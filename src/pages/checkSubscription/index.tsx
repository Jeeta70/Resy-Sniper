import { NewSubscriptionCard } from "@/components";
import { useContext } from "react";
import { UserDetailContext } from "@/context/UserDetailProvider";


const Index = () => {
  const { subscription_type } = useContext(UserDetailContext);


  return (
    <div className="p-10">
      <div className="mb-3 sm:mb-0 sm:h-1/4 text-center">
        <h1 className="mb-3 sm:mb-14 text-primary text-5xl font-bold">
          RESY SNIPER
        </h1>
        <span>
          <h2 className="font-bold text-2xl">Subscription</h2>
        </span>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 sm:gap-10">
        <NewSubscriptionCard
          subscriptionType={"Regular"}
          points={[
            { point: "5 active booking requests" },
            { point: "Single date, single venue booking" },
          ]}
          subscriptionAvailaibility={
            subscription_type === "standard" ? "Active" : ""
          }
          buttonColor={
            subscription_type === "standard"
              ? "bg-[white] text-[black] border-2 hover:bg-[white] hover:text-[black]"
              : "bg-destructive text-[white]"
          }
          button={
            subscription_type === "standard"
              ? "Cancel Subscription"
              : "Upgrade to Pro"
          }
        />
        <NewSubscriptionCard
          subscriptionType={"Pro"}
          points={[
            { point: "5 active booking requests" },
            { point: "Priority booking" },
            { point: "Multiple dates and venues booking" },
            { point: "Same date booking" },
            { point: "Select sitting type" },
          ]}
          subscriptionAvailaibility={
            subscription_type === "premium" ? "Active" : ""
          }
          buttonColor={
            subscription_type === "premium"
              ? "bg-[white] text-[black] border-2 hover:bg-[white] hover:text-[black]"
              : "bg-destructive text-[white]"
          }
          button={
            subscription_type === "premium"
              ? "Cancel Subscription"
              : "Upgrade to Pro"
          }
        />
      </div>
    </div>
  );
};

export default Index;
