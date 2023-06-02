import { useAuthContext } from "../../Contexts/AuthContext";

export default function AuthRenderGate({ children }) {
  const useAuthData = useAuthContext();

  // this gate will make the children  available only for Auth users
  // by checking if the user token is not null => allow to render the content
  // else if the user is not auth /  dont render // hidden

  if (useAuthData.token) {
    return <>{ children }</>;
  }
}
