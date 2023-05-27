import React from "react";

import FilterSortBy from "../../FilterSortBy";
import JobsList from "../../JobsList";
import Pagination from "../../Pagination";

export default function VerifyJobs() {
  return (
    <>
      <FilterSortBy />
      <JobsList />
      <Pagination />
    </>
  );
}
