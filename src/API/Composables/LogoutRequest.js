import { useAuthContext } from "../../Contexts/AuthContext";
import AxiosClient from "../AxiosClient";

export function LogoutRequest() {
  const { setUser, setToken } = useAuthContext();

  const logout = () => {
    AxiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  return { logout };
}
