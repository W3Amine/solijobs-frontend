import { useEffect } from "react";

import { useAuthContext } from "../Contexts/AuthContext";
import AxiosClient from "./AxiosClient";
// import { Outlet } from "react-router-dom";

export default function GetAuthUserData({ children }) {
  const { user, setUser, token } = useAuthContext();

  // note that you can watch the token with useEffect but the in login and register
  // the api will send the token and the user data
  // if y watch for token /  the setToken will run and change the token state
  // and the watcher will run to get /user data
  // then y will ask for user data twice
  // take this in mind

  useEffect(() => {
    if (token) {
      AxiosClient.get("/user").then(({ data }) => setUser(data.data));

      // const GetUserData = async () => {
      //   await AxiosClient.get("/user").then(({ data }) => setUser(data));
      // };
      // GetUserData();
    }
  }, [token, setUser]);

  if (token && user.id) {
    return <> {children} </>;
  } else if (!token) {
    return <> {children} </>;
  }
}
