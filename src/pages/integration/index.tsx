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
  DisableOpenTableModal,
  DisconnectResyAccountModel,
  ResyConnectAccountCard,
} from "@/components";
import { useGetUser } from "@/features/user/user";
import { useMemo, useState } from "react";
import ResyIcon from "@/assets/resy.svg";
import OpenTableIcon from "@/assets/openTable.svg";
import { Skeleton } from "@/components/ui/skeleton";
import { ConnectResyModal } from "@/components";
const Index = () => {
  const { userResponse, isSuccess, isLoading } = useGetUser();

  const user = useMemo(() => {
    if (!isLoading && isSuccess) {
      return userResponse?.data.data;
    }
  }, [isLoading, isSuccess, userResponse?.data.data]);



  return (
    <>
      <div className="container sm:px-60 pt-5 sm:pt-0">
        <CardHeader className="px-0">
          <CardTitle className="text-2xl font-bold">Integrations</CardTitle>
        </CardHeader>
        <Card className="mb-3">
          {isLoading ? (
            <CardContent>
              <Skeleton className="my-3">
                <Skeleton className="inline-block" />
              </Skeleton>
              <Skeleton className="my-2">
                <Skeleton className="inline-block" />
              </Skeleton>
              <Skeleton className="mb-3">
                <Skeleton className="inline-block" />
              </Skeleton>
            </CardContent>
          ) : (
            <CardContent className="p-6">
              <div className="grid sm:grid-cols-[auto,15%] items-center gap-4 border-3">
                <div className=" flex flex-col gap-1">
                  <img src={ResyIcon} alt="" className="h-[30px] w-16" />
                  <CardDescription>
                    <span className="  font-medium text-xs">{user?.resy_token ? user.resy_username : ''}</span>
                  </CardDescription>
                </div>
                {user.resy_token ? (
                  <div className="justify-self-end w-full">
                    <Credenza>
                      <CredenzaTrigger asChild>
                        <Button variant="outline" className="w-full ">
                          Disconnect
                        </Button>
                      </CredenzaTrigger>
                      <DisconnectResyAccountModel />
                    </Credenza>
                  </div>
                ) : (
                  <Credenza>
                    <CredenzaTrigger asChild>
                      <Button variant="primary" className="w-full">
                        Connect
                      </Button>
                    </CredenzaTrigger>
                    <ConnectResyModal />
                  </Credenza>
                )}
              </div>
            </CardContent>
          )}
        </Card>
        <Card className="">
          <CardContent className="p-6">
            <div className="grid  sm:grid-cols-[auto,15%] items-center gap-4 border-3">
              <div className=" flex flex-col gap-1">
                <img src={OpenTableIcon} alt="" className="h-[30px] w-24" />
              </div>
              <div className="justify-self-end w-full">
                {user.ot_access_token ? (
                  <Credenza>
                    <CredenzaTrigger className="w-full">
                      <Button variant="outline" className="w-full ">
                        Disconnect
                      </Button>
                    </CredenzaTrigger>
                    <DisableOpenTableModal />
                  </Credenza>) :
                  <Credenza>
                    <CredenzaTrigger className="w-full">
                      <Button variant="primary" className="w-full ">
                        Connect
                      </Button>
                    </CredenzaTrigger>
                    <ConnectOpenTabelAccountModel />
                  </Credenza>}

              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Index;
