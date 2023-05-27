import React from "react";
import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";
import Pagination from "../../Components/UIComponents/Pagination";
import JobPostSearchSideBar from "../../Components/UIComponents/JobPostSearchSideBar";
import JobsList from "../../Components/UIComponents/JobsList";
import FilterSortBy from "../../Components/UIComponents/FilterSortBy";

export default function Jobs() {
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
              <FilterSortBy />

              <JobsList />

              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
