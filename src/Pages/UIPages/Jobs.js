import React, { useEffect, useState } from "react";
import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";
import Pagination from "../../Components/UIComponents/Pagination";
import JobPostSearchSideBar from "../../Components/UIComponents/JobPostSearchSideBar";
import JobsList from "../../Components/UIComponents/JobsList";
import FilterSortBy from "../../Components/UIComponents/FilterSortBy";
import JobsApi from "../../API/Jobs/Jobs";
import { useSearchParams } from "react-router-dom";

export default function Jobs() {
  const [SearchParams, setSearchParams] = useSearchParams();

  console.log(SearchParams);
  const { GetActiveJobs, ActiveJobsData } = JobsApi();

  const [Page, setPage] = useState("1");
  const [Show, setShow] = useState("5");
  const [Type, setType] = useState(null);

  useEffect(() => {
    setPage(1);
  }, [Show]);

  useEffect(() => {
    setPage(1);
  }, [Type]);

  useEffect(() => {
    if (Page) {
      var pageParameter = "?page=" + Page;
    }
    if (Show) {
      var ShowParameter = "&show=" + Show;
    }
    if (Type) {
      var TypeParameter = "&type=" + Type;
    } else {
      TypeParameter = "";
    }
    GetActiveJobs(pageParameter, ShowParameter, TypeParameter);
  }, [Page, Show, Type]);

  if (!ActiveJobsData) {
    return "loading ...";
  }

  return (
    <>
      <SinglePageHeader PageTitle="here is the job list" />

      <div className="section-full p-t120 p-b90 site-bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <JobPostSearchSideBar />
            </div>
            <div className="col-lg-8 col-md-12">
              <FilterSortBy total={ActiveJobsData.meta.total} setShow={setShow} ShowValue={Show} setType={setType} Type={Type} />
              <JobsList Jobsdata={ActiveJobsData.data} usage="Save" />
              <Pagination changePage={setPage} PaginationData={ActiveJobsData.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
