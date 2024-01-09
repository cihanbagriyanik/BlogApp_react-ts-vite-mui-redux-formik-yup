import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/store";

const PrivateRouter: React.FC = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);

  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
