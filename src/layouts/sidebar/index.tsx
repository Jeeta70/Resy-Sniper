import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siderBarOptions } from "@/utils/constants";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();
  console.log(pathname);
  

  return (
    <div className="flex z-10">
      <div
        className={cn(
          "flex flex-col h-20 sm:h-screen p-3  bg-black shadow duration-300",
          open ? "w-screen h-screen" : " w-screen sm:w-64"
        )}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-center text-[#F94633] text-2xl font-bold">
              RESY SNIPER
            </div>
            <Button
              className="bg-inherit block sm:hidden"
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {siderBarOptions.map((siderBarOption, indx) => (
                <li className={cn("", pathname === siderBarOption.navigate && "border-l-4 border-[#F94633]")} key={indx}>
                  <Link
                    to={siderBarOption.navigate}
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="text-gray-100">
                      {siderBarOption.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
