import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
// import { MyReservationOfResturantCard } from "@/components";
// import { IReservation } from "@/types/reservations";
// import { checkStatus } from "@/utils/healper";

export interface ITab {
  id: number;
  value: string;
  label: string;
}

// interface Reservation {
//   created_date: string;
//   // ... other properties
//   status: string;
// }

// interface TabObject {
//   groupId: string;
//   data: Reservation[];
//   status: string;
// }

// interface Tabs {
//   all: TabObject[];
//   active: TabObject[];
//   paused: TabObject[];
//   completed: TabObject[];
//   canceled: TabObject[];
//   [key: string]: TabObject[];
// }

// interface TabObject {
//   groupId: string;
//   data: IReservation[];
//   status: string;
// }

// interface TabsType {
//   all: TabObject[];
//   active: TabObject[];
//   paused: TabObject[];
//   completed: TabObject[];
//   canceled: TabObject[];
// }

interface MyObject {
  completed: number;
  created_date: string;
  date: string;
  final_snipe_date: string | null;
  final_snipe_time: string | null;
  group_id: string;
  id: number;
  override_reservations: number;
  party_size: number;
  paused: number;
  release_date: string | null;
  release_time: string | null;
  reservation_source: string;
  restaurant_name: string;
  snipe_type: string;
  success: number;
  table_type: string;
  user_id: number;
  venue_id: number;
  status: string;
  data:any[]
}

interface MyData {
  [key: string]: MyObject[];
}

const Index = ({
  userReservations,
}: {
  userReservations: { data: MyData };
  isLoading: boolean;
}) => {
  const { data } = userReservations;
  console.log(data);
  

  // const filter = useMemo(() => {
  //   const tabs: TabsType = {
  //     all: [],
  //     active: [],
  //     paused: [],
  //     completed: [],
  //     canceled: [],
  //   };

  //   Object.entries(data).forEach(([key, value]) => {
  //     const object: TabObject = {
  //       groupId: key,
  //       data: value,
  //       status: value[0]?.status,
  //     };
  //     tabs.all.push(object);

  //     const status = value[0]?.status;
  //     if (status && Object.prototype.hasOwnProperty.call(tabs, status)) {
  //       tabs[status as keyof TabsType].push(object);
  //     }
  //   });

  //   return tabs;
  // }, [data]);

  

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
        <TabsList className="xl:grid xl:grid-cols-5 inline-block xl:w-1/2 w-auto">
          {tabs.map((tab) => (
            <TabsTrigger
              onClick={() => {
                setActiveTab(tab);
              }}
              key={tab.id}
              value={tab.value}
              className="sm:text-sm text-[9px]"
            >
              {/* {tab.label.concat("(").concat(filter[tab.value as keyof TabsType]?.length ??  0).concat(")")} */}dd
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={activeTab?.value}>
          {/* {filter &&
            filter[activeTab.value].map((reservation: IReservation) => (
              <MyReservationOfResturantCard
                key={reservation.id}
                reservation={reservation}
              />
            ))} */}
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
