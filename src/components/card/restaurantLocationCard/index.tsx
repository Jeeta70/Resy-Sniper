import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Globe, MapPin, Phone } from "lucide-react";

interface Props {
  restaurant: {
    name: string;
  };
}

const index = ({ restaurant }: Props) => {
  return (
    <>
      <Card className="">
        {/* need to remove later  */}
        <div className="hidden">{`${restaurant}`}</div>
        <img
          className="rounded-t-lg max-h-[100px] w-full"
          src="../restaurant/restaurant.png"
          alt=""
        />
        <CardContent className="w-3/5 p-6">
          <p className="my-3 text-xs font-normal text-gray-700 dark:text-gray-400 hidden">
            $$$$
          </p>
          <h5 className="mb-2 text-base font-normal tracking-tight ">
            5 Beekman Street, New York, NY 10038
          </h5>
          <p className="mb-3 text-xs font-normal text-blue">
            <MapPin className="inline-block" size={15} />
            <span className="ml-1 text-xs"> Get Directions</span>
          </p>
          <p className="mb-3 text-xs font-normal text-blue">
            <Phone className="inline-block" size={15} />
            <span className="ml-1 text-xs"> +1 917-728-4685</span>
          </p>
          <p className="mb-3 text-xs font-normal text-blue">
            <Globe className="inline-block" size={15} />
            <span className="ml-1 text-xs">
              {" "}
              https://www.templecourtnyc.com/
            </span>
          </p>
        </CardContent>
        <CardFooter className="flex gap-3">
          <Button variant="outline" className="w-full">
            Select
          </Button>
          <Button variant="primary" className="w-full">
            Reserve
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default index;
