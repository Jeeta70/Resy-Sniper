import { MapPin, X } from "lucide-react";

import { AddRestaurantCard, Model, SearchInputField } from "@/components";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { CredenzaClose, CredenzaDescription, CredenzaHeader } from "@/components/ui/credenza";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { cn } from "@/lib/utils";

const AddResturantModel = () => {
  const { reservationFormState } = useReservationContext();




  const tags = Array.from({ length: 10 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <Model className={cn("max-w-2xl border-2 h-screen sm:h-auto", reservationFormState.selectSittingOptions.showModel && "p-4")}>
      <CredenzaHeader className="">
        <CardTitle className=" mb-0 sm:mb-5 text-start font-bold text-2xl flex justify-between">
          <span> {reservationFormState.selectSittingOptions.title}</span>
          <CredenzaClose className="sm:hidden">
            <span role="button"><X /></span>
          </CredenzaClose>
        </CardTitle>
      </CredenzaHeader>

      {!reservationFormState.selectSittingOptions.showModel ? (
        <>
          <SearchInputField />
          <CredenzaDescription>
            <ScrollArea className="sm:h-80 rounded-md">
              <div className="flex flex-col gap-2">
                {tags.map((_tag, i) => <AddRestaurantCard key={i}  />)}
              </div>
            </ScrollArea>
          </CredenzaDescription>
        </>
      ) : (
        <div className="flex flex-col justify-between">
          <div>
            <img className="rounded-lg w-full" src="../reservation/AddReservation/Img.png" alt="" />
          </div>
          <div>
            <p className="my-3 text-xs font-normal text-gray-700 dark:text-gray-400">
              $$$$
            </p>
            <h5 className="mb-2 text-base font-bold tracking-tight ">
              The Coop at Double Chicken Please
            </h5>
            <p className="mb-3  text-xs font-normal ">
              <MapPin className="inline-block" /> Prospective height
            </p>
            <p className="font-normal text-xs text-light">
              Talk about returning to your roots: Though known for his
              sophisticated high-end French cuisine, Daniel Boulud is from the
              great gastronomic capital of Lyon and with Le Gratin, he pays
              tribute to the hearty, homey cooking of the convivial Lyonnais
              bistros known as bouchons. The defining dish here? The creamy
              potato extravaganza that is the gratin dauphinois, of course.
            </p>
            <h2 className="font-semibold text-sm my-3">Available sittings</h2>
            <div className="flex w-1/2 gap-2">
              <Button variant="outline" className="w-full">
                Any
              </Button>
              <Button variant="outline" className="w-full">
                Indoor
              </Button>
              <Button variant="outline" className="w-full">
                Outdoor
              </Button>
            </div>
          </div>
        </div>
      )}
      <Separator />
      <div className="flex justify-end gap-4">
        <Button variant="outline" className="">
          Cancel
        </Button>
        <Button variant="primary" className="">
          Confirm
        </Button>
      </div>

    </Model>
  );
};

export default AddResturantModel;
