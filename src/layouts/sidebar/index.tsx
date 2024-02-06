import React, { useContext, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siderBarOptions } from "@/utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogOut, Menu, X } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useGetReservationCount } from "@/features/reservation/reservation";
import { UserDetailContext } from "@/context/UserDetailProvider";
import { useQueryClient } from "@tanstack/react-query";

const Index = () => {
  const queryClient = useQueryClient();
  const [open, setOpen] = React.useState(false);
  const { reservationCounts, isSuccess } = useGetReservationCount();
  const { subscription_type } = useContext(UserDetailContext);


  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width: 673px)");
  const handleOpen = async () => {
    if (isMobile) {
      setOpen(!open);
    }
  };

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
    queryClient.invalidateQueries({ queryKey: ["user"] });
  };

  const resCount = useMemo(() => {
    if (isSuccess && reservationCounts) {
      return reservationCounts.data.total_reservations;
    }
    return 0;
  }, [isSuccess, reservationCounts]);

  return (
    <div className="flex z-10 fixed top-0 left-0">
      <div
        className={cn(
          "flex flex-col h-16 sm:h-screen bg-black  shadow duration-300 overflow-hidden",
          open ? "w-screen h-screen" : " w-screen sm:w-64 "
        )}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Button
              className={`bg-inherit ${open ? "block" : "hidden"
                } sm:hidden right-5 absolute p-0 px-0 py-auto`}
              onClick={() => setOpen(!open)}
            >
              <X />
            </Button>
            <div className="text-center text-primary text-2xl font-bold w-full sm:w-auto p-3">
              <a href="/reservations">RESY SNIPER</a>
            </div>
            <Button
              className={`bg-inherit ${open ? "hidden" : "block"
                } sm:hidden left-5 absolute p-0 px-0 py-auto`}
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </Button>
          </div>
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {siderBarOptions.map((siderBarOption, indx) => (
              <li
                className={cn(
                  pathname.includes(siderBarOption.pathname) &&
                  " border-l-2 border-primary "
                )}
                key={indx}
              >
                <Link
                  to={siderBarOption.navigate}
                  className="flex items-center p-2 space-x-3 rounded-md text-white"
                >
                  <p>{siderBarOption.icon}</p>
                  <span className="" onClick={() => handleOpen()}>
                    {siderBarOption.title}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Button
                className="flex font-normal items-center p-2 space-x-3 rounded-md text-white text-sm"
                onClick={handleClick}
              >
                {/* {siderBarOption.icon} */}
                <LogOut size={18} />
                <span className="">Logout</span>
              </Button>
            </li>
          </ul>
        </div>
        <div
          className={`text-white mt-auto bg-[url(@/assets/SidebarImage.png)] bg-no-repeat  bg-cover bg-bottom h-1/2 flex justify-center flex-col items-center`}
        >
          <div>
            <span className="font-extrabold text-10 text-6xl">{resCount}</span>
            <span className="font-extrabold text-10 text-2xl">/{subscription_type === "standard" ? '5' : '25'}</span>
          </div>
          <span className=" font-medium text-sm">
            Reservation requests used
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
