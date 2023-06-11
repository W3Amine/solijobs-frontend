import React, { useEffect, useState } from "react";
import Jobs from "../../../../API/Jobs/Jobs";
import FilterSortBy from "../../FilterSortBy";
import JobsList from "../../JobsList";
import Pagination from "../../Pagination";

export default function SavedJobs() {
  const { GetSavedJobs, SavedJobsData } = Jobs();
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
    GetSavedJobs(pageParameter, ShowParameter, TypeParameter);
  }, [Page, Show, Type]);

  if (!SavedJobsData) {
    return "loading ...";
  }

  return (
    <>
      <FilterSortBy total={SavedJobsData.meta.total} setShow={setShow} ShowValue={Show} setType={setType} Type={Type} />
      <JobsList Jobsdata={SavedJobsData.data} usage="Unsave" />
      <Pagination changePage={setPage} PaginationData={SavedJobsData.meta.links} />
    </>
  );
}
