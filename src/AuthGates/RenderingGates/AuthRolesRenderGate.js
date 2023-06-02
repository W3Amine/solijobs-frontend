import { useAuthContext } from "../../Contexts/AuthContext";

export default function AuthRolesRenderGate({ Role, children }) {
  const useAuthData = useAuthContext();

  // Role => string => the user role to check

  // every rolesData key have his number in DB TABLE AND IN api user 'useAuthData.user.role'
  const rolesData = { admin: 0, manager: 1, candidate: 2, employer: 3 };

  // the programmer will send Role prop which contain a string value
  //that point to one of rolesData keys i will check the equality
  // of the user data useAuthData.user.role and rolesData[Role]
  if (useAuthData.user.role === rolesData[Role]) {
    return <>{children}</>;
  }
}
