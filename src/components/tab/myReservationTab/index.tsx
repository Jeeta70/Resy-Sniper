import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemo, useState } from "react";
import {
  MyReservationOfResturantCard,
} from "@/components";
import { IReservation } from "@/types/reservations";

export interface ITab {
  id: number;
  value: "all" | "active" | "paused" | "completed" | "canceled";
  label: string;
}

const Index = ({
  userReservations,
  isLoading,
}: {
  userReservations: { data: { data: IReservation[] } };
  isLoading: boolean;
}) => {
  const reservationsObject = useMemo(() => {
    if (!isLoading && Array.isArray(userReservations.data)) {
      return userReservations.data.reduce(
        (
          accumulator: { [x: string]: unknown[] },
          currentValue: { active: []; paused: []; completed: [] }
        ) => {
          const { active, paused, completed } = currentValue;
          accumulator["all"].push({
            ...currentValue,
            status: completed ? "completed" : active ? "active" : "paused",
          });
          if (completed) {
            accumulator["completed"].push({
              ...currentValue,
              status: "completed",
            });
          }
          if (active) {
            accumulator["completed"].push({
              ...currentValue,
              status: "completed",
            });
          } else if (paused) {
            accumulator["paused"].push({ ...currentValue, status: "paused" });
          }
          return accumulator;
        },
        { all: [], active: [], paused: [], completed: [], canceled: [] }
      );
    }
  }, [isLoading, userReservations]);

  const [tabs] = useState<ITab[]>([
    { id: 1, value: "all", label: "All" },
    { id: 2, value: "active", label: "Active" },
    { id: 3, value: "paused", label: "Paused" },
    { id: 4, value: "completed", label: "Completed" },
    { id: 5, value: "canceled", label: "Canceled" },
  ]);

  const [activeTab, setActiveTab] = useState<ITab>(tabs[0]);

  return (
    <>
      <Tabs defaultValue="all">
        <TabsList className="grid grid-cols-5 w-1/2">
          {tabs.map((tab) => (
            <TabsTrigger
              onClick={() => {
                setActiveTab(tab);
              }}
              key={tab.id}
              value={tab.value}
            >
              {tab.label
                .concat("(")
                .concat(
                  typeof reservationsObject === "object"
                    ? reservationsObject[tab.value].length
                    : 0
                )
                .concat(")")}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={activeTab?.value} className="">
          {reservationsObject &&
            reservationsObject[activeTab.value].map(
              (reservation: IReservation) => (
                <MyReservationOfResturantCard
                  key={reservation.id}
                  reservation={reservation}
                />
              )
            )}
          {/* {reservationsObject} */}
          {/* {Array.from({ length: activeTab.count }).map(() => (
          ))} */}
        </TabsContent>
        {/* <TabsContent value="active">

          <Card>
            <CardHeader>
              <CardTitle>active</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent> */}
        {/* <TabsContent value="paused">
          <Card>
            <CardHeader>
              <CardTitle>paused</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent> */}
        {/* <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>completed</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent> */}
        {/* <TabsContent value="canceled">
          <Card>
            <CardHeader>
              <CardTitle>canceled</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent> */}
      </Tabs>
    </>
  );
};

export default Index;
