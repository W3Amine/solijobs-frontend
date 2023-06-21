import { useState } from "react";
import AxiosClient from "../AxiosClient";
export default function Jobs() {
  const [EmployerJobsData, setData] = useState();
  const [UnactiveJobsData, setUnactiveJobsData] = useState();
  const [ActiveJobsData, setActiveJobsData] = useState();
  const [AppliedJobsData, setAppliedJobsData] = useState();
  const [SavedJobsData, setSavedJobsData] = useState();
  const [JobDetails, setJobDetails] = useState();
  const [JobApplyersData, setJobApplyersData] = useState();
  const [DeleteJobData, setDeleteJobData] = useState();

  const GetJobDetails = async (id) => {
    await AxiosClient.get("/jobs/GetJobDetails/" + id).then(({ data }) => {
      setJobDetails(data[0]);
    });
  };

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

  const GetActiveJobs = async (PageParameter, ShowParameter, TypeParameter, CategoryParameter, SearchParameter, CountryParameter) => {
    await AxiosClient.get("/jobs/GetActiveJobs" + PageParameter + ShowParameter + TypeParameter + CategoryParameter + SearchParameter + CountryParameter).then(({ data }) => {
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

  const GetJobApplyers = async (id) => {
    await AxiosClient.get("/jobs/GetJobApplyers/" + id).then(({ data }) => {
      setJobApplyersData(data);
    });
  };

  const DeleteJob = async (id) => {
    await AxiosClient.delete("/jobs/" + id).then(({ data }) => {
      setDeleteJobData(data);
    });
  };

  const saveJob = async (data) => {
    await AxiosClient.post("/jobs/saveJob", data).then(({ data }) => {
      // setDeleteJobData(data);
      console.log(data);
    });
  };

  const applyjob = async (data) => {
    await AxiosClient.post("/jobs/applyjob", data).then(({ data }) => {
      // setDeleteJobData(data);
      console.log(data);
    });
  };

  const Activatejob = async (data) => {
    await AxiosClient.post("/jobs/Activatejob", data).then(({ data }) => {
      // setDeleteJobData(data);
      console.log(data);
    });
  };

  return {
    GetJobDetails,
    JobDetails,
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
    GetJobApplyers,
    JobApplyersData,
    DeleteJob,
    DeleteJobData,
    saveJob,
    applyjob,
    Activatejob,
  };
}
