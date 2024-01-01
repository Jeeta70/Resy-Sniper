
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';

import { Credenza,  CredenzaTrigger } from '@/components/ui/credenza';
import { ConnectOpenTabelAccountModel, DisconnectResyAccountModel } from '@/components';

const Index = () => {
  return (
    <>
      <div className="m-6 sm:m-auto">
        <div className="sm:w-8/12 mx-auto ">
          <CardHeader className="px-0">
            <CardTitle>Integrations</CardTitle>
          </CardHeader>
        </div>
        <Card className="sm:w-8/12 mx-auto mb-6">
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-[auto,15%] items-center gap-4 border-3">
              <div className=" flex flex-col gap-1 ">
                <img
                  src="./connectAccount/resy.svg"
                  alt=""
                  className="h-10 w-24"
                />
                <CardDescription className="font-bold text-black text-md ">
                  John Doe
                </CardDescription>
                <CardDescription>
                  {" "}
                  <span className="ml-1 text-xs"> johndoe@example.com</span>
                </CardDescription>
              </div>
              <div className=" justify-self-end w-full">
                <Credenza>
                  <CredenzaTrigger asChild>
                      <Button variant="outline" className="w-full">
                  Disconnect
                </Button>
                  </CredenzaTrigger>
                  <DisconnectResyAccountModel/>
                </Credenza>
              </div>
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
                  className="h-10 w-24"
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
}

export default Index