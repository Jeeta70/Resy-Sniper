import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siderBarOptions } from "@/utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogOut, Menu } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

const Index = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  // const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width: 673px)");
  const handleOpen = async () => {
    if (isMobile) {
      setOpen(!open)
    }
  }

  const handleClick = () => {
    localStorage.removeItem('token')
    navigate("/login")
  }

  return (
    <div className="flex z-10 fixed top-0 left-0">
      <div
        className={cn(
          "flex flex-col h-16 sm:h-screen bg-black  shadow duration-300 overflow-hidden",
          open ? "w-screen h-screen" : " w-screen sm:w-64"
        )}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-center text-primary text-2xl font-bold w-full sm:w-auto p-3">
              RESY SNIPER
            </div>
            <Button
              className={"bg-inherit block sm:hidden left-5 absolute"}
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
                  <span className="" onClick={() => handleOpen()}>{siderBarOption.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <Button className="flex font-normal items-center p-2 space-x-3 rounded-md text-white text-sm" onClick={handleClick}>
                {/* {siderBarOption.icon} */}
                <LogOut size={18} />
                <span className="">Logout</span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
