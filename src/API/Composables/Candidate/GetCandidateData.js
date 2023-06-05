import { useState } from "react";
import AxiosClient from "../../AxiosClient";

export default function GetCandidateData() {
  const [CandidateData, setData] = useState();

  const GetTheCandidateData = async () => {
    await AxiosClient.get("/CandidateProfile/GetCandidateData").then(({ data }) => {
      setData(data);
    });
  };

  return { GetTheCandidateData, CandidateData };
}
