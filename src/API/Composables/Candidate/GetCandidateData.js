import { useState } from "react";
import AxiosClient from "../../AxiosClient";

export default function GetCandidateData() {
  const [CandidateData, setData] = useState();
  const [CandidateDataById, setCandidateDataById] = useState();
  const GetTheCandidateData = async () => {
    await AxiosClient.get("/CandidateProfile/GetCandidateData").then(({ data }) => {
      setData(data);
    });
  };

  const GetTheCandidateDataById = async (id) => {
    await AxiosClient.get("/CandidateProfile/CandidateData/" + id).then(({ data }) => {
      setCandidateDataById(data[0]);
    });
  };

  return { GetTheCandidateData, CandidateData, CandidateDataById, GetTheCandidateDataById };
}
