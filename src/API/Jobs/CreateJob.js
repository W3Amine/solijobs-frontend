import { useState } from "react";
import AxiosClient from "../AxiosClient";
import { LaravelErrorsHandler } from "../Helpers";

export default function CreateJob() {
  const [ServerErrors, setServerErrors] = useState();
  const [ServerSuccessMessage, setServerSuccessMessage] = useState();

  const CreateTheJob = (JobData) => {
    AxiosClient.post("/jobs", JobData)
      .then(({ data }) => {
        //setToken(data.token);
        setServerSuccessMessage(data);
        console.log(data);
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

  return { CreateTheJob, ServerErrors, setServerErrors, ServerSuccessMessage, setServerSuccessMessage };
}
