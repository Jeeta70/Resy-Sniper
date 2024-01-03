import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin } from "lucide-react";

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
          className="rounded-t-lg h-1/2 w-full"
          src="../restaurant/restaurant.png"
          alt=""
        />
        <CardContent>
          <p className="my-3 text-xs font-normal text-gray-700 dark:text-gray-400">
            $$$$
          </p>
          <h5 className="mb-2 text-base font-bold tracking-tight ">
            The Coop at Double Chicken Please
          </h5>
          <p className="mb-3  text-xs font-normal text-gray-700 dark:text-gray-400">
            <MapPin className="inline-block" /> Prospective height
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
