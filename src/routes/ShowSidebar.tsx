import { Sidebar } from "@/layouts";
import { Outlet } from "react-router-dom";

const ShowSidebar = () => {

  return (
    <>
      <div className="sm:flex sm:static">
        <Sidebar />
        <div className="flex-1  mt-16 sm:mt-10 sm:ml-72">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ShowSidebar;
