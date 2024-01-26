// import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AddReservation, AllRestaurants, ConnectAccount, Integration, Login, Profile, Reservation, ResetPassword, Restaurant, Restaurants, SignUp, Subscription, TopPick } from // AddReservation,
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
import { Toaster } from "@/components/ui/toaster";
import ProtectedRoute from "./ProtectedRoute";
import PresistConnectAccount from "./PresistConnectAccount";
import PersistSubscribtion from "./PersistSubscribtion";
import { UserDetailContextProvider } from "@/context/UserDetailProvider";
import { RestaurantContextProvider } from "@/context/SelectRestaurantForReservationProvider";
import CheckSubscription from "@/pages/checkSubscription";
// import { ResetPasswordModal } from "@/components";
import NewPage from "@/pages/newpage";
import PersistDashboard from "./PersistDashboard";
import PresistLoginSignUp from "./PresistLoginSignUp";

// const Login = React.lazy(() => import("@/pages/login"));
// const SignUp = React.lazy(() => import("@/pages/signup"));
// const ConnectAccount = React.lazy(() => import("@/pages/connectAccount"));
// const AddReservation = React.lazy(() => import("@/pages/reservations/addReservation"));
// const Restaurants = React.lazy(() => import("@/pages/restaurants"));
// const Integration = React.lazy(() => import("@/pages/integration"));
// const Profile = React.lazy(() => import("@/pages/profile"));
// const Reservation = React.lazy(() => import("@/pages/reservations"));
// const Restaurant = React.lazy(() => import("@/pages/restaurant"));
// const TopPick = React.lazy(() => import("@/pages/restaurants/topPicks"));
// const Subscription = React.lazy(() => import("@/pages/subscription"));
// const NewPage = React.lazy(() => import("@/pages/newpage"))
// const ResetPassword = React.lazy(() => import("@/pages/resetPassword"))
// const CheckSubscription = React.lazy(() => import("@/pages/checkSubscription"))

const Router = () => {
  return (
    // <React.Suspense
    //   fallback={<h1>Loading...</h1>}
    // >
    <>

      <RestaurantContextProvider>
          <UserDetailContextProvider>
        <Routes>
          {/* PUBLIC ROUTE */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route element={<PresistLoginSignUp />}>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route element={<PresistConnectAccount />}>
              <Route path="/connect-accounts" element={<ConnectAccount />} />
            </Route>
            <Route element={<PersistSubscribtion />}>
              <Route path="/subscription" element={<Subscription />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              {/* <Route path="/connect-accounts" element={<ConnectAccount />} /> */}
              <Route
                path="/reservations/add-reservation/:venue_id?/:group_id?/"
                element={<AddReservation />}
              />
              <Route path="/restaurant/:venue_id" element={<Restaurant />} />
              <Route path="/" element={<ShowSidebar />}>
                <Route element={<PersistDashboard />}>
                  <Route path="/reservations" element={<Reservation />} />
                </Route>

                <Route path="/check-subscription" element={<CheckSubscription />} />

                <Route path="restaurants">
                  <Route index element={<Restaurants />} />
                  <Route path="top-picks" element={<TopPick />} />
                  <Route path="all-restaurants" element={<AllRestaurants />} />
                </Route>
                {/* <Route path="/restaurants" element={<Restaurants />} /> */}
                {/* <Route path="/restaurants/top-picks" element={<TopPick />} /> */}
                <Route path="/integrations" element={<Integration />} />

                <Route path="/profile" element={<Profile />} />
              </Route>
            </Route>
          <Route path="/reset-password/:token?" element={<ResetPassword />} />
          <Route path="/home" element={<NewPage />} />
        </Routes>
          </UserDetailContextProvider>
      </RestaurantContextProvider>
      <Toaster /></>
    // </React.Suspense>
  );
};

export default Router;
