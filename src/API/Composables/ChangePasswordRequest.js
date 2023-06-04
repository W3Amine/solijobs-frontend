import { useState } from "react";
import AxiosClient from "../AxiosClient";
import { LaravelErrorsHandler } from "../Helpers";

export default function ChangePasswordRequest() {
  const [ServerErrors, setServerErrors] = useState();
  const [ServerSuccessMessage, setServerSuccessMessage] = useState();

  const ChangeThePassword = (ChangePasswordData) => {
    AxiosClient.post("/ChangePassword", ChangePasswordData)
      .then(({ data }) => {
        //setToken(data.token);
        console.log("success" + data);
        setServerSuccessMessage(data);
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

  return { ChangeThePassword, ServerErrors, ServerSuccessMessage };
}
