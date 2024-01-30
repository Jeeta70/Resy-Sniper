// import * as z from "zod";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AtSign, Phone } from "lucide-react";
import { Tabs } from "@/components/ui/tabs";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
// import { signupFormSchema } from "@/utils/formZodSchema";
import { ProfileTab } from "@/components";
import { useGetUser } from "@/features/user/user";
import { useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { capitalizeFirstAlphabet } from "@/utils/healper";

const Index = () => {
  const { userResponse, isSuccess, isLoading } = useGetUser();

  console.log(userResponse);
  // const { auth,isLoading } = useCheckUserAuth()

  const user = useMemo(() => {
    if (isSuccess) {
      return userResponse?.data.data;
    }
  }, [isSuccess, userResponse?.data.data]);



  // user = false;

  // useEffect(() => {
  //   // console.log("ddssddd", isError);
  // }, [error, isError]);

  // const user = {
  //   first_name:"Ajeet",
  //   last_name: "Singh",
  //   email:"ajrana70@gmail.com",
  //   phone:"+1 917-728-4685",
  //   subscription_type:"f"

  // }

  return (
    <>
      <Tabs defaultValue="account" className="container sm:px-80 pt-5 sm:pt-0">
        <CardHeader className="px-0">
          <CardTitle className="font-bold text-2xl">Profile </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="grid grid-cols-[20%,auto,20%] sm:grid-cols-[12%,auto,10%] items-center gap-4 border-3">
            <div className=" bg-black h-full text-white rounded-md flex justify-center items-center text-4xl">
              {isLoading ? (
                <Skeleton className="my-3 w-3/5 ">
                  <Skeleton className="inline-block" />
                </Skeleton>
              ) : (
                <>
                  {user.first_name[0].toUpperCase()}
                  {user.last_name[0].toUpperCase()}
                </>
              )}
            </div>
            <div className=" flex flex-col gap-2 ">
              <CardDescription className="font-semibold text-black text-sm ">
                {isLoading ? (
                  <Skeleton className="my-3 w-1/5 ">
                    <Skeleton className="inline-block" />
                  </Skeleton>
                ) : (
                  <>
                    {capitalizeFirstAlphabet(user.first_name)}
                    {capitalizeFirstAlphabet(user.last_name)}
                  </>
                )}
              </CardDescription>
              <CardDescription>
                {isLoading ? (
                  <Skeleton className="my-3 w-1/5 ">
                    <Skeleton className="inline-block" />
                  </Skeleton>
                ) : (
                  <>
                    <AtSign className="inline-block" size={12} />
                    <span className="ml-1 font-medium text-xs text-light">
                      {user?.email ?? " johndoe@example.com"}
                    </span>
                  </>
                )}
              </CardDescription>
              <CardDescription>
                {isLoading ? (
                  <Skeleton className="my-3 w-1/5 ">
                    <Skeleton className="inline-block" />
                  </Skeleton>
                ) : (
                  <>

                    <Phone className="inline-block" size={12} />
                    <span className="ml-1 font-medium text-xs text-light">
                      {user?.phone ?? "+1 917-728-4685"}
                    </span>
                  </>
                )}
              </CardDescription>
            </div>
            {isLoading ? 
              
              <> <Skeleton className="my-3 w-5/5 ">
                <Skeleton className="inline-block" />
              </Skeleton>
                <Skeleton className="my-3 w-5/5 ">
                  <Skeleton className="inline-block" />
                </Skeleton>
                <Skeleton className="my-3 w-5/5 ">
                  <Skeleton className="inline-block" />
                </Skeleton></>
              : <div className="justify-self-end">
                {user.subscription_type === "standard" ? (
                  <Button variant="default" size="sm">REGULAR</Button>
                ) : (
                  <Button variant="primary" size="sm">PRO</Button>
                )}
              </div>}

          </div>
        </CardContent>
        {isLoading ? (
          <>
            <Skeleton className="my-3 w-5/5 ">
              <Skeleton className="inline-block" />
            </Skeleton>
            <Skeleton className="my-3 w-5/5 ">
              <Skeleton className="inline-block" />
            </Skeleton>
            <Skeleton className="my-3 w-5/5 ">
              <Skeleton className="inline-block" />
            </Skeleton>
          </>
        ) : (
          <>
            <ProfileTab user={user} />
          </>
        )}
      </Tabs>
    </>
  );
};

export default Index;
