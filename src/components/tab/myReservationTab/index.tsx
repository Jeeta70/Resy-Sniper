import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useMemo, useState } from "react";
import {
  MyReservationOfResturantCard,
  MyReservationTabDropDown,
} from "@/components";
import { IReservation } from "@/types/reservations";
import { getStatusString, getStatusStringBadge } from "@/utils/healper";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WarningIcon from "@/assets/WarningCircle.svg"
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

export type TabsType = {
  all: TabObject[];
  active: TabObject[];
  paused: TabObject[];
  completed: TabObject[];
  canceled: TabObject[];
};

interface MyData {
  [key: string]: IReservation[];
}

const Index = ({
  userReservations,
  show,
}: {
  userReservations: { data: MyData };
  isLoading: boolean;
  show: boolean;
}) => {
  const { data } = userReservations;
  const navigate = useNavigate();

  function getUniqueData(data: MyData):MyData {
    const uniqueData: MyData = {};
    for (const key in data) {
      const venues = data[key];
      const uniqueVenues: IReservation[] = [];
      const seenIds = new Set<number>();

      venues.forEach(venue => {
        if (!seenIds.has(venue.venue_id)) {
          uniqueVenues.push(venue);
          seenIds.add(venue.venue_id);
        }
      });

      uniqueData[key] = uniqueVenues;
    }

    return uniqueData;
  }

  const filter = useMemo(() => {
    const tabs: TabsType = {
      all: [],
      active: [],
      paused: [],
      completed: [],
      canceled: [],
    };

    const uniqueResturant = getUniqueData(data);

    Object.entries(uniqueResturant).forEach(([key, value]) => {
      const object: TabObject = {
        groupId: key,
        data: value,
        status: getStatusStringBadge(value[0]?.status),
      };
      tabs.all.push(object);
      const status = getStatusString(value[0]?.status);

      if (status && Object.prototype.hasOwnProperty.call(tabs, status)) {
        tabs[status as keyof TabsType].push(object);
      }
    });

    return tabs;
  }, [data]);



  const [tab, setTab] = useState("all");

  return (
    <>
      <div className="flex gap-2 sm:hidden">
        <MyReservationTabDropDown
          tab={tab}
          setTab={setTab}
          className="w-full justify-start"
          filter={filter}
        />

        <Button
          variant="primary"
          className="w-full"
          onClick={() => navigate("/reservations/add-reservation")}
          disabled={show}
        >
          <Plus className="sm:mr-3 mr-0" /> Add Reservation
        </Button>
      </div>
      <Tabs defaultValue="all">
        <TabsList className="xl:grid xl:grid-cols-5  xl:w-[70%] lg:grid lg:grid-cols-5 lg:w-[100%] w-auto bg-transparent hidden sm:grid sm:grid-cols-5 p-0">
          <TabsTrigger
            className="sm:text-sm block  text-[9px] data-[state=active]:bg-black border-[1px] border-light  data-[state=active]:text-white rounded-r-none"
            value="all"
          >
            All({filter["all"].length})
          </TabsTrigger>
          <TabsTrigger
            className="sm:text-sm block text-[9px] data-[state=active]:bg-black border-[1px] border-light  data-[state=active]:text-white rounded-none"
            value="active"
          >
            Active({filter["active"].length})
          </TabsTrigger>
          <TabsTrigger
            className="sm:text-sm block text-[9px] data-[state=active]:bg-black border-[1px] border-light  data-[state=active]:text-white rounded-none"
            value="paused"
          >
            Paused({filter["paused"].length})
          </TabsTrigger>
          <TabsTrigger
            className="sm:text-sm block text-[9px] data-[state=active]:bg-black border-[1px] border-light data-[state=active]:text-white rounded-none"
            value="completed"
          >
            Completed({filter["completed"].length})
          </TabsTrigger>
          <TabsTrigger
            className="sm:text-sm block text-[9px] data-[state=active]:bg-black border-[1px] border-light  data-[state=active]:text-white rounded-s-none"
            value="canceled"
          >
            Canceled({filter["canceled"].length})
          </TabsTrigger>
        </TabsList>


        <div className="my-3 sm:my-2 bg-orange flex p-2 rounded-sm gap-2 items-center text-white">
          <img src={WarningIcon} className="h-5 w-5" alt="warning-icon" />
          <small className="font-semibold">Your Resy account currently lacks a connected credit card. Please note that certain restaurants may require a credit card for reservations. </small>
        </div>


        <div className="sm:block hidden">
          {Object.keys(filter).map((status, i) => (
            <React.Fragment key={i}>
              <TabsContent value={status as keyof TabsType}>
                {filter[status as keyof TabsType].map(
                  (
                    reservation: {
                      data: IReservation[];
                      groupId: string;
                      status: string;
                    },
                    i: React.Key | null | undefined
                  ) => (
                    <MyReservationOfResturantCard
                      reservation={reservation.data}
                      groupId={reservation.groupId}
                      status={reservation.status}
                      key={i}
                    />
                  )
                )}
              </TabsContent>
            </React.Fragment>
          ))}
        </div>

        {/* mobile view */}
        <div className="sm:hidden block">
          {filter[tab as keyof TabsType].map(
            (
              reservation: {
                data: IReservation[];
                groupId: string;
                status: string;
              },
              i: React.Key
            ) => (
              <MyReservationOfResturantCard
                reservation={reservation.data}
                groupId={reservation.groupId}
                status={reservation.status}
                key={i}
              />
            )
          )}
        </div>
      </Tabs>
    </>
  );
};

export default Index;
