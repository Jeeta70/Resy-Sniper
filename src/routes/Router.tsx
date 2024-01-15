import React from "react";
import { Routes, Route } from "react-router-dom";
import { } from // AddReservation,
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
  "@/pages";
import ShowSidebar from "./ShowSidebar";

import { ReservationContextProvider } from "@/context/ReservationFomProvider";
import { Toaster } from "@/components/ui/toaster";
import ProtectedRoute from "./ProtectedRoute";
import PresistConnectAccount from "./PresistConnectAccount";
import PersistSubscribtion from "./PersistSubscribtion";

const Login = React.lazy(() => import("@/pages/login"));
const SignUp = React.lazy(() => import("@/pages/signup"));
const ConnectAccount = React.lazy(() => import("@/pages/connectAccount"));
const AddReservation = React.lazy(
  () => import("@/pages/reservations/addReservation")
);
const Restaurants = React.lazy(() => import("@/pages/restaurants"));
const Integration = React.lazy(() => import("@/pages/integration"));
const Profile = React.lazy(() => import("@/pages/profile"));
const Reservation = React.lazy(() => import("@/pages/reservations"));
const Restaurant = React.lazy(() => import("@/pages/restaurant"));
const TopPick = React.lazy(() => import("@/pages/restaurants/topPicks"));
const Subscription = React.lazy(() => import("@/pages/subscription"));
const NewPage = React.lazy(() => import("@/pages/newpage"))

const Router = () => {
  return (
    <React.Suspense
      fallback={<h1>Loading...</h1>}
    >
      <ReservationContextProvider>
        <Routes>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route element={<PresistConnectAccount />}>
              <Route path="/connect-accounts" element={<ConnectAccount />} />
            </Route>
            <Route element={<PersistSubscribtion />}>
              <Route path="/subscription" element={<Subscription />} />
            </Route>
            <Route
              path="/reservations/add-reservation"
              element={<AddReservation />}
            />
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

              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Route>

            <Route path="/newpage" element={<NewPage />} />

          </Route>
        </Routes>
      </ReservationContextProvider>
      <Toaster />
    </React.Suspense>
  );
};

export default Router;
