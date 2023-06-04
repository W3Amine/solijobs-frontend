import { useState } from "react";
import { useAuthContext } from "../../Contexts/AuthContext";
import AxiosClient from "../AxiosClient";
import { LaravelErrorsHandler } from "../Helpers";

export function RegisterRequest() {
  const [ServerErrors, setServerErrors] = useState();
  const { setToken } = useAuthContext();
  const register = (RegisterData) => {
    AxiosClient.post("/register", RegisterData)
      .then(({ data }) => {
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        console.log(response);

        if (response.status === 422) {
          console.log(response.data.errors);
          setServerErrors(LaravelErrorsHandler(response.data.errors));
        }
      });
  };

  return { register, ServerErrors, setServerErrors };
}
