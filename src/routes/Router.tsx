import { Routes, Route } from "react-router-dom";
import React from "react";
import { Login, SignUp } from "@/pages";

const ConnectAccount = React.lazy(()=>import("@/pages/connectAccount"))



const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/connect-accounts" element={<ConnectAccount />} />
      </Route>
    </Routes>
  );
};

export default Router;
