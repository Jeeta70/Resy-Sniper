import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siderBarOptions } from "@/utils/constants";
import { Link, useLocation } from "react-router-dom";
import { LogOut, Menu } from "lucide-react";

const Index = () => {
  const [open, setOpen] = React.useState(false);
  // const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();

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
                    onClick={() => setOpen(!open)}
                    to={siderBarOption.navigate}
                    className="flex items-center p-2 space-x-3 rounded-md text-white"
                  >
                    {siderBarOption.icon}
                    <span className="">{siderBarOption.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link className="flex items-center p-2 space-x-3 rounded-md text-white" to={""}>
                  {/* {siderBarOption.icon} */}
                  <LogOut />
                  <span className="">Logout</span>
                </Link>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
