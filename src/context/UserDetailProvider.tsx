import { useGetUser } from "@/features/user/user";
import { IUser } from "@/types/user";
import { ReactNode, createContext, useEffect, useState } from "react";


export const UserDetailContext = createContext<IUser>({
  email: "",
  email_notifications: 0,
  first_name: "",
  id: 17,
  last_name: "",
  ot_access_token: null,
  ot_refresh_token: null,
  ot_username: null,
  password: "",
  phone: "",
  phone_notifications: 0,
  resy_api_key: "",
  resy_password: "",
  resy_token: "",
  resy_username: "",
  stripe_customer_id: "",
  subscription_type: "",
});

export function UserDetailContextProvider(props: { children: ReactNode }) {
  const [userDetail, setUserDetail] = useState<IUser>({
    email: "",
    email_notifications: 0,
    first_name: "",
    id: 17,
    last_name: "",
    ot_access_token: null,
    ot_refresh_token: null,
    ot_username: null,
    password: "",
    phone: "",
    phone_notifications: 0,
    resy_api_key: "",
    resy_password: "",
    resy_token: "",
    resy_username: "",
    stripe_customer_id: "",
    subscription_type: "",
  });
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
