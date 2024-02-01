import { buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronDownIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { TabsType } from "../myReservationTab";
import { ReactNode } from "react";



export default function DrawerDemo({
  tab,
  setTab,
  className,
  filter,
}: {
  tab: ReactNode;
  setTab: (tab: string) => void;
  className: string;
  filter: TabsType;
}) {
  const tapTypes = ["all", "active", "paused", "completed", "canceled"];
  return (
    <Drawer>
      <DrawerTrigger
        className={cn(
          buttonVariants({ variant: "outline" }),
          "capitalize",
          className
        )}
      >
        {tab}
        <ChevronDownIcon className="inline-block ml-auto sm:ml-0" />
      </DrawerTrigger>
      <DrawerContent className="text-start">
        <DrawerHeader className="flex justify-between">
          <DrawerTitle className="font-bold text-2xl text-start">
            Show Reservation
          </DrawerTitle>
          <DrawerClose>
            <X />
          </DrawerClose>
        </DrawerHeader>
        <DrawerFooter>
          {tapTypes.map((tab, i) => (
            <DrawerClose
              onClick={() => setTab(tab)}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "capitalize mr-auto text-start border-none font-normal"
              )}
              key={i}
            >
              {  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {  /* @ts-ignore */}
              {tab}{" "} ({filter[tab].length})
            </DrawerClose>
          ))}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
