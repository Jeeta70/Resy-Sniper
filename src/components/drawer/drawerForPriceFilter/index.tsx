
import { ChevronDownIcon, X } from "lucide-react";
// import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useSearchParams } from "react-router-dom";

export default function DrawerDemo() {
  const [searchParams, setSeachParams] = useSearchParams();
  searchParams.get("location")
  const tapTypes = ["$", "$$", "$$$", "$$$$"];

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-auto">Price<ChevronDownIcon className="inline-block ml-5 sm:ml-0" /></Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex justify-between">
          <DrawerTitle className="font-bold text-2xl text-start">
            Price
          </DrawerTitle>
          <DrawerClose>
            <X />
          </DrawerClose>
        </DrawerHeader>
        <DrawerFooter>
          {tapTypes.map((tab: string, i) => (
            <DrawerClose
              onClick={() => {
                setSeachParams((prev) => {
                  prev.set("price", tab);
                  return prev;
                });
              }}
              className="mt-2 justify-start flex"
              key={i}
            >
              {tab}
            </DrawerClose>
          ))}
        </DrawerFooter>
        {/* <div className="mx-auto w-full max-w-sm">$$</div>
        <div className="mx-auto w-full max-w-sm">$$$</div>
        <div className="mx-auto w-full max-w-sm">$$</div> */}
      </DrawerContent>
    </Drawer>
  );
}
