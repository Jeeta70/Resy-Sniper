import { useGetUser } from "@/features/user/user";
import { ReactNode, createContext, useEffect, useState } from "react";

type UserContextType = { subscription_type: string }

export const UserDetailContext = createContext<UserContextType>({
  subscription_type: ""
});

export function UserDetailContextProvider(props: { children: ReactNode }) {
  const [userDetail, setUserDetail] = useState<UserContextType>({ subscription_type: ""});
  const { userResponse, isLoading, isSuccess } = useGetUser();

  useEffect(() => {
    if (!isLoading && isSuccess) {
      const userDetail = userResponse?.data.data;
      setUserDetail(userDetail);
    }
  }, [isLoading, isSuccess, userResponse]);



  return (
    <UserDetailContext.Provider value={userDetail}>
      {props.children}
    </UserDetailContext.Provider>
  );
}
