
import { ChevronDownIcon } from "lucide-react";
// import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useSearchParams } from "react-router-dom";

export default function DrawerDemo() {
  const [searchParams, setSeachParams] = useSearchParams();
  searchParams.get("location")

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div>
          <Button variant="outline">Price</Button>
          <ChevronDownIcon className="inline-block ml-auto sm:ml-0" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div
          onClick={() => {
            setSeachParams((prev) => {
              prev.set("price", "$");
              return prev;
            });
          }}
          className="mx-auto w-full max-w-sm"
        >
          $
        </div>
        <div className="mx-auto w-full max-w-sm">$$</div>
        <div className="mx-auto w-full max-w-sm">$$$</div>
        <div className="mx-auto w-full max-w-sm">$$</div>
      </DrawerContent>
    </Drawer>
  );
}
