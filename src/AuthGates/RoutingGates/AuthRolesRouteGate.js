import React from "react";
import { useAuthContext } from "../../Contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRolesRouteGate({ Role, NavigateTo = "NotFound" }) {
  const useAuthData = useAuthContext();

  // NavigateTo => string => the path to redirect to
  // Role => string => the user role to check

  // every rolesData key have his number in DB TABLE AND IN api user 'useAuthData.user.role'
  const rolesData = { admin: 0, manager: 1, candidate: 2, employer: 3 };

  // the programmer will send Role prop which contain a string value
  //that point to one of rolesData keys i will check the equality
  // of the user data useAuthData.user.role and rolesData[Role]
  console.log("###########################################################");
  console.log(useAuthData.user.role);
  console.log(rolesData[Role]);
  if (useAuthData.user.role === rolesData[Role]) {
    return <Outlet />;
  } else {
    return <Navigate to={NavigateTo} />;
  }
}
