import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { IRestaurant } from "@/types/restaurants";
import ResyIcon from "@/assets/resy-logo-circle.png";
import OpenTableIcon from "@/assets/opentable.png";
import { UserDetailContext } from "@/context/UserDetailProvider";
import { useContext } from "react";
import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";
import { AccountNotConnectedModal, FeatureIsForProModel } from "@/components";

interface Props {
  restaurant: IRestaurant;
  onResturantCardClick: (restaurant: IRestaurant) => void;
}

const AddRestaurantCard = ({ restaurant, onResturantCardClick }: Props) => {
  const user = useContext(UserDetailContext);
  const premium = user.subscription_type === "standard" ? false : true;
  const resy_token = user.resy_token;
  const ot_access_token = user.ot_access_token;
  const renderDollarSigns = () => {
    const dollarSigns = Array.from({ length: restaurant.price }, (_, index) => (
      <span
        key={index}
        className="text-[#12171A] opacity-[60%] text-[11px] !font-[600]"
      >
        &#36;
      </span>
    ));
    return dollarSigns;
  };

  const resturantCard = (
    <>
      {" "}
      <div className="relative">
        {restaurant.reservation_source === "resy" ? (
          <img
            src={ResyIcon}
            alt="resyIcon"
            className="ml-auto rounded-sm absolute h-10 top-1 left-1"
          />
        ) : (
          <img
            src={OpenTableIcon}
            alt="Open table icon"
            className="ml-auto rounded-sm absolute h-10 top-1 left-1"
          />
        )}
        <img
          style={{ objectFit: 'cover' }}
          className="rounded-l-lg min-w-36 w-20 h-32 my-auto"
          src={restaurant.cover_image_url ?? "../restaurant/restaurant.png"}
          alt=""
          loading="lazy"
        />
      </div>
      <CardContent className="w-full h-auto p-0 px-3">
        <p className="my-1 text-xs font-normal text-gray-700 dark:text-gray-400">
          {renderDollarSigns()}
        </p>

        <div className="flex">
          <h5 className="mb-1 text-base font-bold tracking-tight ">
            {restaurant.venue_name}
          </h5>
        </div>
        <p className="mb-3 sm:mb-0  text-xs !font-[600] text-[#12171A">
          <MapPin className="inline-block" /> {restaurant.locality}
        </p>
      </CardContent>
    </>
  );

  return (
    <>
      {restaurant.reservation_source === "opentable" && !ot_access_token ? (
        <>
          {/* Check if restaurant source is OpenTable and user Open Table account is not connected */}
          <Credenza>
            <CredenzaTrigger asChild>
              <Card className="flex cursor-pointer items-center" role="button">
                {resturantCard}
              </Card>
            </CredenzaTrigger>
            <AccountNotConnectedModal restaurantSource={restaurant.reservation_source} />
          </Credenza>
        </>
      ) : restaurant.reservation_source === "resy" && !resy_token ? (
        <>
          {/* Check if restaurant source is Rest and user Resy account is not connected */}
          <Credenza>
            <CredenzaTrigger asChild>
              <Card className="flex cursor-pointer items-center" role="button">
                {resturantCard}
              </Card>
            </CredenzaTrigger>
            <AccountNotConnectedModal restaurantSource={restaurant.reservation_source} />
          </Credenza>
        </>
      ) : !premium && restaurant.premium ? (
        <>
          <Credenza>
            <CredenzaTrigger asChild>
              <Card className="flex cursor-pointer items-center" role="button">
                {resturantCard}
              </Card>
            </CredenzaTrigger>
            <FeatureIsForProModel />
          </Credenza>
        </>
      ) : (
        <>
          <Card
            className="flex cursor-pointer items-center "
            role="button"
            onClick={() => onResturantCardClick(restaurant)}
          >
            {resturantCard}
          </Card>
        </>
      )}
    </>
  );
};

export default AddRestaurantCard;
