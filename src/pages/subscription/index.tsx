import { SubscriptionCard } from "@/components";
import { useCreateSubscribtion, useManageSubscription } from "@/features/subscription/subscription";
import { useEffect } from "react";



const Index = () => {
  const { createSubsciption } = useCreateSubscribtion()
  const { manageSubscription, isLoading, refetch, isSuccess } = useManageSubscription()

  const handleSubscription = (subscriptionType: string) => {
    return createSubsciption(subscriptionType)
  }

  useEffect(() => {
    if (!isLoading && isSuccess) {
      return window.location.replace(manageSubscription?.data.url);
    }
  }, [isLoading, isSuccess, manageSubscription])



  return (
    <div className="h-svh sm:p-10 p-5">
      <div className="mb-3 sm:mb-0 sm:h-1/4 text-center">
        <h1 className="mb-3 sm:mb-14 text-primary sm:text-4xl text-3xl font-bold">
          RESY SNIPER
        </h1>
        <span>
          <h2 className="font-bold text-2xl">Subscription</h2>
          <p className="text-light font-normal text-sm">Please select a subscription page</p>
        </span>
        <button onClick={() => refetch()}>Manage subscription</button>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 sm:gap-10">
        <SubscriptionCard
          subscriptionType={"Regular"}
          points={[
            { point: "5 active booking requests" },
            { point: "Single date, single venue booking" },
          ]}
          handleSubscription={handleSubscription}

        />
        <SubscriptionCard
          subscriptionType={"Pro"}
          points={[
            { point: "5 active booking requests" },
            { point: "Priority booking" },
            { point: "Multiple dates and venues booking" },
            { point: "Same date booking" },
            { point: "Select sitting type" },
          ]}
          handleSubscription={handleSubscription}
        />
      </div>
    </div>
  );
};

export default Index;
