import React from "react";
import { useAuthContext } from "../../Contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestRouteGate({ NavigateTo = "/" }) {
  const useAuthData = useAuthContext();

  // NavigateTo => string => the path to redirect to
  // this gate will make the children Outlet available only for Guest users
  // by checking if the user token is null => allow to enter to pages like login
  // else if the user is not guest redirect the user to NavigateTo path like profile
  if (!useAuthData.token) {
    return <Outlet />;
  } else {
    return <Navigate to={NavigateTo} />; // example : redirect to /profile when the authenticated user try to enter to guests pages like login and register
  }
}
