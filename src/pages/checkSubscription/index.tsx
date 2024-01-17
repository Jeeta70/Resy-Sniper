import { NewSubscriptionCard } from "@/components";
import { useEffect, useState, createContext } from "react";
import { useGetUser } from "@/features/user/user";

type UserContextType = { subscription_type: string }

export const UserDetailContext = createContext<UserContextType>({
    subscription_type: ""
});

const Index = () => {
    const [userDetail, setUserDetail] = useState<UserContextType>({ subscription_type: "" });
    const { userResponse } = useGetUser();

    useEffect(() => {
        if (userResponse) {
            const userDetail = userResponse?.data.data;
            setUserDetail(userDetail.subscription_type);
            console.log(userDetail.subscription_type)
        }
    }, [userResponse]);



    return (
        <div className="h-svh p-10">
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
                    userDetail={userDetail}
                    subscriptionType={"Regular"}
                    points={[
                        { point: "5 active booking requests" },
                        { point: "Single date, single venue booking" },
                    ]}
                    subscriptionAvailaibility={userDetail === 'standard' ? 'Active' : ''}
                    buttonColor={userDetail === 'standard' ? 'bg-[white] text-[black] border-2 hover:bg-[white] hover:text-[black]' : 'bg-destructive text-[white]'}
                    button={userDetail === 'standard' ? 'Cancel Subscription' : 'Upgrade to Pro'}
                />
                <NewSubscriptionCard
                    userDetail={userDetail}
                    subscriptionType={"Pro"}
                    points={[
                        { point: "5 active booking requests" },
                        { point: "Priority booking" },
                        { point: "Multiple dates and venues booking" },
                        { point: "Same date booking" },
                        { point: "Select sitting type" },
                    ]}
                    subscriptionAvailaibility={userDetail === 'pro' ? 'Active' : ''}
                    buttonColor={userDetail === 'pro' ? 'bg-[white] text-[black] border-2 hover:bg-[white] hover:text-[black]' : 'bg-destructive text-[white]'}
                    button={userDetail === 'pro' ? 'Cancel Subscription' : 'Upgrade to Pro'}

                />
            </div>
        </div>
    );
};

export default Index;
