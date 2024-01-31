import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemo } from "react";
import { MyReservationOfResturantCard } from "@/components";
import { IReservation } from "@/types/reservations";
// import { checkStatus } from "@/utils/healper";

export interface ITab {
  id: number;
  value: string;
  label: string;
}


interface TabObject {
  groupId: string;
  data: IReservation[];
  status: string;
}


type TabsType = {
  all: TabObject[];
  active: TabObject[];
  paused: TabObject[];
  completed: TabObject[];
  canceled: TabObject[];
}


interface MyData {
  [key: string]: IReservation[];
}

const Index = ({
  userReservations,
}: {
  userReservations: { data: MyData };
  isLoading: boolean;
}) => {
  const { data } = userReservations;


  const filter = useMemo(() => {
    const tabs: TabsType = {
      all: [],
      active: [],
      paused: [],
      completed: [],
      canceled: [],
    };

    Object.entries(data).forEach(([key, value]) => {

      const object: TabObject = {
        groupId: key,
        data: value,
        status: value[0]?.status,
      };
      tabs.all.push(object);
      const status = value[0]?.status;
      if (status && Object.prototype.hasOwnProperty.call(tabs, status)) {
         tabs[status as keyof TabsType].push(object);
      }
    });

    return tabs

  }, [data]);


  



  

  return (
    <>
      <Tabs defaultValue="all">
        <TabsList className="xl:grid xl:grid-cols-5 inline-block xl:w-1/2 w-auto bg-transparent">
          <TabsTrigger className="sm:text-sm block  text-[9px] data-[state=active]:bg-black border-[1px] border-light  data-[state=active]:text-white rounded-r-none" value="all">All({filter["all"].length})
          </TabsTrigger>
          <TabsTrigger className="sm:text-sm block text-[9px] data-[state=active]:bg-black border-[1px] border-light  data-[state=active]:text-white rounded-none" value="active">Active({filter["active"].length})
          </TabsTrigger>
          <TabsTrigger className="sm:text-sm block text-[9px] data-[state=active]:bg-black border-[1px] border-light  data-[state=active]:text-white rounded-none" value="paused">Paused({filter["paused"].length})
          </TabsTrigger>
          <TabsTrigger className="sm:text-sm block text-[9px] data-[state=active]:bg-black border-[1px] border-light data-[state=active]:text-white rounded-none" value="completed">Completed({filter["completed"].length})
          </TabsTrigger>
          <TabsTrigger className="sm:text-sm block text-[9px] data-[state=active]:bg-black border-[1px] border-light  data-[state=active]:text-white rounded-s-none" value="canceled">Canceled({filter["canceled"].length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {filter["all"].map((reservation,i)=>(
            <MyReservationOfResturantCard
              reservation={reservation.data}
              groupId={reservation.groupId}
              status={reservation.status}
              key={i}
            />
          ))}
        </TabsContent>
        <TabsContent value="active">
          {filter["active"].map((reservation, i) => (
            <MyReservationOfResturantCard
              reservation={reservation.data}
              groupId={reservation.groupId}
              status={reservation.status}
              key={i}
            />
          ))}
        </TabsContent>
        <TabsContent value="paused">
          {filter["paused"].map((reservation, i) => (
            <MyReservationOfResturantCard
              reservation={reservation.data}
              groupId={reservation.groupId}
              status={reservation.status}
              key={i}
            />
          ))}
        </TabsContent>
        <TabsContent value="completed">
          {filter["completed"].map((reservation, i) => (
            <MyReservationOfResturantCard
              reservation={reservation.data}
              groupId={reservation.groupId}
              status={reservation.status}
              key={i}
            />
          ))}
        </TabsContent>
        <TabsContent value="canceled">
          {filter["canceled"].map((reservation, i) => (
            <MyReservationOfResturantCard
              reservation={reservation.data}
              groupId={reservation.groupId}
              status={reservation.status}
              key={i}
            />
          ))}
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Index;
