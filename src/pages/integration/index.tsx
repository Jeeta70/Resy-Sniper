import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";
import {
  ConnectOpenTabelAccountModel,
  DisconnectResyAccountModel,
} from "@/components";
import { useGetUser } from "@/features/user/user";
import { capitalizeFirstAlphabet } from "@/utils/healper";
import { useMemo } from "react";
const Index = () => {
  const { userResponse, isSuccess ,isLoading } = useGetUser();



  const user = useMemo(() => {
    if (!isLoading && isSuccess) {
      return userResponse?.data.data;
    }
  }, [isLoading, isSuccess, userResponse?.data.data]);


  return (
    <>
      <div className="m-6 sm:m-auto">
        <div className="sm:w-8/12 mx-auto ">
          <CardHeader className="px-0">
            <CardTitle className="text-2xl font-bold">Integrations</CardTitle>
          </CardHeader>
        </div>
        <Card className="sm:w-8/12 mx-auto mb-3">
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-[auto,15%] items-center gap-4 border-3">
              <div className=" flex flex-col gap-1">
                <img
                  src="./connectAccount/resy.svg"
                  alt=""
                  className="h-[30px] w-16"
                />
                <CardDescription className="font-bold text-black text-sm ">
                  {capitalizeFirstAlphabet(user.first_name)}
                  {capitalizeFirstAlphabet(user.last_name)}
                </CardDescription>
                <CardDescription>
                  <span className="ml-1  font-medium text-xs">
                    {user?.email}
                  </span>
                </CardDescription>
              </div>
              {user.resy_token ? (
                <div className=" justify-self-end w-full">
                  <Credenza>
                    <CredenzaTrigger asChild>
                      <Button variant="outline" className="w-full">
                        Disconnect
                      </Button>
                    </CredenzaTrigger>
                    <DisconnectResyAccountModel />
                  </Credenza>
                </div>
              ) : (
                <Credenza>
                  <CredenzaTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Connect
                    </Button>
                  </CredenzaTrigger>
                  <DisconnectResyAccountModel />
                </Credenza>
              )}
            </div>
          </CardContent>
        </Card>
        <Card className="sm:w-8/12 mx-auto">
          <CardContent className="p-6">
            <div className="grid  sm:grid-cols-[auto,15%] items-center gap-4 border-3">
              <div className=" flex flex-col gap-1">
                <img
                  src="./connectAccount/openTable.svg"
                  alt=""
                  className="h-[30px] w-24"
                />
              </div>
              <div className="justify-self-end w-full">
                <Credenza>
                  <CredenzaTrigger asChild>
                    <Button variant="primary" className="w-full">
                      Connect
                    </Button>
                  </CredenzaTrigger>
                  <ConnectOpenTabelAccountModel />
                </Credenza>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Index;
