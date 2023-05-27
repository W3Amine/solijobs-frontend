import React from "react";
import FilterSortBy from "../../FilterSortBy";
import JobsList from "../../JobsList";
import Pagination from "../../Pagination";
export default function ManageJobs() {
  return (
    <>
      <FilterSortBy />
      <JobsList />
      <Pagination />
    </>
  );
}
