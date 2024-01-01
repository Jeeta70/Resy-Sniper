import { Sidebar } from "@/layouts";
import { Outlet } from "react-router-dom";

const ShowSidebar = () => {

  return (
    <>
      <div className="sm:flex sm:static">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ShowSidebar;
