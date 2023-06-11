import React, { useEffect, useState } from "react";
import Jobs from "../../../../API/Jobs/Jobs";

import FilterSortBy from "../../FilterSortBy";
import JobsList from "../../JobsList";
import Pagination from "../../Pagination";

export default function VerifyJobs() {
  const { GetUnactiveJobs, UnactiveJobsData } = Jobs();

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
    GetUnactiveJobs(pageParameter, ShowParameter, TypeParameter);
  }, [Page, Show, Type]);

  if (!UnactiveJobsData) {
    return "loading ...";
  }

  return (
    <>
      <FilterSortBy total={UnactiveJobsData.meta.total} setShow={setShow} ShowValue={Show} setType={setType} Type={Type} />
      <JobsList Jobsdata={UnactiveJobsData.data} usage="verifyJobs" />
      <Pagination changePage={setPage} PaginationData={UnactiveJobsData.meta.links} />
    </>
  );
}
