import { useState } from "react";
import AxiosClient from "../AxiosClient";

export default function Jobs() {
  const [EmployerJobsData, setData] = useState();
  const [UnactiveJobsData, setUnactiveJobsData] = useState();
  const [ActiveJobsData, setActiveJobsData] = useState();
  const [AppliedJobsData, setAppliedJobsData] = useState();
  const [SavedJobsData, setSavedJobsData] = useState();

  const GetEmployerJobs = async (PageParameter, ShowParameter, TypeParameter) => {
    await AxiosClient.get("/jobs/EmployerJobs" + PageParameter + ShowParameter + TypeParameter).then(({ data }) => {
      setData(data);
    });
  };

  const GetUnactiveJobs = async (PageParameter, ShowParameter, TypeParameter) => {
    await AxiosClient.get("/jobs/GetUnactiveJobs" + PageParameter + ShowParameter + TypeParameter).then(({ data }) => {
      setUnactiveJobsData(data);
    });
  };

  const GetActiveJobs = async (PageParameter, ShowParameter, TypeParameter) => {
    await AxiosClient.get("/jobs/GetActiveJobs" + PageParameter + ShowParameter + TypeParameter).then(({ data }) => {
      setActiveJobsData(data);
    });
  };

  const GetAppliedJobs = async (PageParameter, ShowParameter, TypeParameter) => {
    await AxiosClient.get("/jobs/GetAppliedJobs" + PageParameter + ShowParameter + TypeParameter).then(({ data }) => {
      setAppliedJobsData(data);
    });
  };

  const GetSavedJobs = async (PageParameter, ShowParameter, TypeParameter) => {
    await AxiosClient.get("/jobs/GetSavedJobs" + PageParameter + ShowParameter + TypeParameter).then(({ data }) => {
      setSavedJobsData(data);
    });
  };

  return {
    GetEmployerJobs,
    EmployerJobsData,
    GetUnactiveJobs,
    UnactiveJobsData,
    GetActiveJobs,
    ActiveJobsData,
    GetAppliedJobs,
    AppliedJobsData,
    GetSavedJobs,
    SavedJobsData,
  };
}
