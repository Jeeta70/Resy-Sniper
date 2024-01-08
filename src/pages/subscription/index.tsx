import { SubscriptionCard } from "@/components";

const index = () => {
  return (
    <div className="h-svh p-10">
      <div className="mb-3 sm:mb-0 sm:h-1/4 text-center">
        <h1 className="mb-3 sm:mb-14 text-primary text-5xl font-bold">
          RESY SNIPER
        </h1>
        <span>
          <h2 className="font-bold text-2xl">Subscription</h2>
          <p className="text-light font-normal text-sm">Please select a subscription page</p>
        </span>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 sm:gap-10">
        <SubscriptionCard
          subscriptionType={"Regular"}
          points={[
            { point: "5 active booking requests" },
            { point: "Single date, single venue booking" },
          ]}
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
        />
      </div>
    </div>
  );
};

export default index;
