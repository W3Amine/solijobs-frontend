import { useState } from "react";
import { useAuthContext } from "../../../Contexts/AuthContext";
import AxiosClient from "../../AxiosClient";

import { LaravelErrorsHandler } from "../../Helpers";

export default function SetCandidateData() {
  const [ServerErrors, setServerErrors] = useState();
  const [ServerSuccessMessage, setServerSuccessMessage] = useState();

  const { user, setUser } = useAuthContext();
  const SetTheCandidateData = (CandidateData) => {
    AxiosClient.post("/CandidateProfile/SetCandidateData", CandidateData)
      .then(({ data }) => {
        setServerSuccessMessage(data.success);
        //Here i will look if the response data user name is === to the user.name state
        // if diff please setUser and reactive the app with new data thanks lol xd
        if (data.user.name !== user.name) {
          setUser({ ...user, name: data.user.name });
        }
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

  return { SetTheCandidateData, ServerErrors, setServerErrors, ServerSuccessMessage, setServerSuccessMessage };
}
