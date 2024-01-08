import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  // AddReservation,
  // ConnectAccount,
  // Integration,
  // Login,
  // Profile,
  // Reservation,
  // Restaurant,
  // Restaurants,
  // SignUp,
  // Subscription,
  // TopPick,
} from "@/pages";
import ShowSidebar from "./ShowSidebar";

import { ReservationContextProvider } from "@/context/ReservationFomProvider";

const Login = React.lazy(() => import("@/pages/login"));
const SignUp = React.lazy(() => import("@/pages/signup"));
const ConnectAccount = React.lazy(() => import("@/pages/connectAccount"));
const AddReservation = React.lazy(() => import("@/pages/reservations/addReservation"));
const Restaurants = React.lazy(() => import("@/pages/restaurants"))
const Integration = React.lazy(() => import("@/pages/integration"))
const Profile = React.lazy(() => import("@/pages/profile"))
const Reservation = React.lazy(() => import("@/pages/reservations"))
const Restaurant = React.lazy(() => import("@/pages/restaurant"))
const TopPick = React.lazy(() => import("@/pages/restaurants/topPicks"))
const Subscription = React.lazy(() => import("@/pages/subscription"))


const Router = () => {
  return (
    <React.Suspense
      fallback={<> <h1>Loading...</h1></>}>
      <ReservationContextProvider>
        <Routes>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/connect-accounts" element={<ConnectAccount />} />
            <Route path="/reservations/add-reservation" element={<AddReservation />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />

            <Route path="/" element={<ShowSidebar />}>
              <Route path="/reservations" element={<Reservation />} />
              <Route path="restaurants">
                <Route index element={<Restaurants />} />
                <Route path="top-picks" element={<TopPick />} />
              </Route>
              {/* <Route path="/restaurants" element={<Restaurants />} /> */}
              {/* <Route path="/restaurants/top-picks" element={<TopPick />} /> */}
              <Route path="/integrations" element={<Integration />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </ReservationContextProvider>
    </React.Suspense>
  );
};

export default Router;
