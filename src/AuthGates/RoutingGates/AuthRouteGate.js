import React from "react";
import { useAuthContext } from "../../Contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRouteGate({ NavigateTo = "/" }) {
  const useAuthData = useAuthContext();

  // NavigateTo => string => the path to redirect to

  // this gate will make the children Outlet available only for Auth users
  // by checking if the user token is not null => allow to enter to pages like profile
  // else if the user is not auth /  redirect the user to NavigateTo path like login

  if (useAuthData.token) {
    return <Outlet />;
  } else {
    return <Navigate to={NavigateTo} />; // example : redirect to /login when the guest try to enter to users pages like profile
  }
}
