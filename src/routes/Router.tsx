import React from "react";
import { Routes, Route } from "react-router-dom";
import { Integration, Login, Profile, Reservation, SignUp, Subscription } from "@/pages";
import ShowSidebar from "./ShowSidebar";

const ConnectAccount = React.lazy(() => import("@/pages/connectAccount"));
// const Dashboard = React.lazy(() => import("@/pages/dashboard"));
const AddReservation = React.lazy(
  () => import("@/pages/reservations/addReservation")
);

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/connect-accounts" element={<ConnectAccount />} />
        <Route
          path="/reservations/add-reservation"
          element={<AddReservation />}
        />
        <Route path="/" element={<ShowSidebar />}>
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/restaurants" element={<h1>restaurants</h1>} />
          <Route path="/integrations" element={<Integration/>} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
