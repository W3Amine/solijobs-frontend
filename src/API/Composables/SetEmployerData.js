import { useState } from "react";
import AxiosClient from "../AxiosClient";

export default function SetEmployerData() {
  const [ServerErrors, setServerErrors] = useState();

  const SetTheEmployerData = (EmployerData) => {
    AxiosClient.post("/EmployerProfile/SetEmployerData", EmployerData)
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
}
