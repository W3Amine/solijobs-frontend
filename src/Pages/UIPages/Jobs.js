import React, { useEffect, useState } from "react";
import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";
import Pagination from "../../Components/UIComponents/Pagination";
import JobPostSearchSideBar from "../../Components/UIComponents/JobPostSearchSideBar";
import JobsList from "../../Components/UIComponents/JobsList";
import FilterSortBy from "../../Components/UIComponents/FilterSortBy";
import JobsApi from "../../API/Jobs/Jobs";
import { useSearchParams } from "react-router-dom";
import Categories from "../../API/Composables/Categories/Categories";

export default function Jobs() {
  const [SearchParams, setSearchParams] = useSearchParams();

  console.log(Object.fromEntries([...SearchParams]));

  // setSearchParams({ filter: "true" });
  const SearchParamsObject = Object.fromEntries([...SearchParams]);

  function setPageSearchParams(data) {
    setSearchParams({ ...SearchParamsObject, page: data });
  }
  function setShowSearchParams(data) {
    setSearchParams({ ...SearchParamsObject, page: 1, show: data });
  }

  function setTypeSearchParams(data) {
    setSearchParams({ ...SearchParamsObject, page: 1, type: data });
  }

  function setCategorySearchParams(data) {
    setSearchParams({ ...SearchParamsObject, page: 1, category: data });
  }

  function setSearchSearchParams(data) {
    setSearchParams({ ...SearchParamsObject, page: 1, search: data });
  }

  function setCountrySearchParams(data) {
    setSearchParams({ ...SearchParamsObject, page: 1, country: data });
  }

  const { GetActiveJobs, ActiveJobsData } = JobsApi();
  const { GetAllCategories, AllCategories } = Categories();
  const [Page, setPage] = useState("1");
  const [Show, setShow] = useState("5");
  const [Type, setType] = useState(null);
  const [Category, setCategory] = useState(null);
  const [Search, setSearch] = useState(null);
  const [Country, setCountry] = useState(null);

  useEffect(() => {
    setPage(1);
  }, [Show]);

  useEffect(() => {
    setPage(1);
  }, [Type]);

  useEffect(() => {
    if (Page) {
      var pageParameter = "?page=" + (SearchParams.get("page") ? SearchParams.get("page") : Page);
    }
    if (Show) {
      var ShowParameter = "&show=" + (SearchParams.get("show") ? SearchParams.get("show") : Show);
    }
    if (Type || SearchParams.get("type")) {
      var TypeParameter = "&type=" + (SearchParams.get("type") ? SearchParams.get("type") : Type);
    } else {
      TypeParameter = "";
    }

    if (Category || SearchParams.get("category")) {
      var CategoryParameter = "&category=" + (SearchParams.get("category") ? SearchParams.get("category") : Category);
    } else {
      CategoryParameter = "";
    }

    if (Search || SearchParams.get("search")) {
      var SearchParameter = "&search=" + (SearchParams.get("search") ? SearchParams.get("search") : Search);
    } else {
      SearchParameter = "";
    }

    if (Country || SearchParams.get("country")) {
      var CountryParameter = "&country=" + (SearchParams.get("country") ? SearchParams.get("country") : Country);
    } else {
      CountryParameter = "";
    }

    // console.log(SearchParameter);
    GetActiveJobs(pageParameter, ShowParameter, TypeParameter, CategoryParameter, SearchParameter, CountryParameter);
    GetAllCategories();
  }, [Page, Show, Type, SearchParams]);

  if (!ActiveJobsData && !AllCategories) {
    return "loading ...";
  }

  return (
    <>
      <SinglePageHeader PageTitle="here is the job list" />

      <div className="section-full p-t120 p-b90 site-bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <JobPostSearchSideBar
                AllCategories={AllCategories}
                setCategory={setCategorySearchParams}
                categoryValue={SearchParams.get("category")}
                setSearch={setSearchSearchParams}
                searchValue={SearchParams.get("search")}
                setCountry={setCountrySearchParams}
                countryValue={SearchParams.get("country")}
              />
            </div>
            <div className="col-lg-8 col-md-12">
              <FilterSortBy total={ActiveJobsData.meta.total} setShow={setShowSearchParams} ShowValue={SearchParams.get("show")} setType={setTypeSearchParams} Type={SearchParams.get("type")} />
              <JobsList Jobsdata={ActiveJobsData.data} usage="Save" />
              <Pagination changePage={setPageSearchParams} PaginationData={ActiveJobsData.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
