import { useAuthContext } from "../../Contexts/AuthContext";

export default function GuestRenderGate({ children }) {
  const useAuthData = useAuthContext();

  // this gate will make the children  available only for Guest users
  // by checking if the user token is null => allow to see and render the content
  // else if the user is not guest hide // dont render children
  if (!useAuthData.token) {
    return <>{children}</>;
  }
}
