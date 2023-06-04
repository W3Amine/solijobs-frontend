import { useState } from "react";

import { useAuthContext } from "../../Contexts/AuthContext";
import AxiosClient from "../AxiosClient";
import { LaravelErrorsHandler } from "../Helpers";

export function LoginRequest() {
  const { setToken } = useAuthContext();
  const [ServerErrors, setServerErrors] = useState();

  const login = (LoginData) => {
    AxiosClient.post("/login", LoginData)
      .then(({ data }) => {
        setToken(data.token);
        // setUser(data.user);
      })
      .catch((err) => {
        const response = err.response;
        console.log(response);

        if (response.status === 422) {
          console.log(response.data.errors);
          // console.log(Object.keys(response.data.errors));

          setServerErrors(LaravelErrorsHandler(response.data.errors));
        }
      });
  };

  return { login, ServerErrors, setServerErrors };
}
