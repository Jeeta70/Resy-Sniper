import { AddRestaurantCard, Model, SearchInputField } from "@/components";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { CredenzaDescription, CredenzaHeader } from "@/components/ui/credenza";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { MapPin } from "lucide-react";



const AddResturantModel = () => {
  const { reservationFormState } = useReservationContext();

  console.log(reservationFormState);

  const tags = Array.from({ length: 5 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <Model className="max-w-2xl">
      <CredenzaHeader className="">
        <CardTitle className="mb-5 text-start font-bold text-2xl">
          {reservationFormState.selectSittingOptions.title}
        </CardTitle>
        {!reservationFormState.selectSittingOptions.showModel ? (
          <>
            <SearchInputField />
            <CredenzaDescription>
              <ScrollArea className="h-80 rounded-md  ">
                <div className="flex flex-col gap-2">
                  {tags.map((_tag, i) => (
                    <>
                      <AddRestaurantCard
                        key={i}
                        restaurant={{
                          name: "dd",
                        }}
                      />
                    </>
                  ))}
                </div>
              </ScrollArea>
            </CredenzaDescription>
          </>
        ) : (
          <div>
            <div>
              <img
                className="rounded-lg w-full"
                src="../reservation/AddReservation/Img.png"
                alt=""
              />
            </div>
            <div>
              <p className="my-3 text-xs font-normal text-gray-700 dark:text-gray-400">
                $$$$
              </p>
              <h5 className="mb-2 text-base font-bold tracking-tight ">
                The Coop at Double Chicken Please
              </h5>
              <p className="mb-3  text-xs font-normal text-gray-700 dark:text-gray-400">
                <MapPin className="inline-block" /> Prospective height
              </p>
              <p className=" font-normal text-xs ">
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
      </CredenzaHeader>
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
