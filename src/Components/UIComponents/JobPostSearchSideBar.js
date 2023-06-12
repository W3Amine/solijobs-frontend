import React, { useRef } from "react";

export default function JobPostSearchSideBar({ AllCategories, setCategory, categoryValue, setSearch, searchValue, setCountry, countryValue }) {
  const Category = useRef("");
  const Search = useRef("");
  const Country = useRef("");

  function CategoryOnChange() {
    setCategory(Category.current.value);
  }

  function SearchOnChange() {
    setSearch(Search.current.value);
  }

  function CountryOnChange() {
    setCountry(Country.current.value);
  }

  return (
    <div className="theiaStickySidebar">
      <div className="side-bar">
        <div className="sidebar-elements search-bx">
          <form>
            <div className="form-group mb-4">
              <h4 className="section-head-small mb-4">Category</h4>
              <div className="dropdown bootstrap-select wt-select-bar-large">
                <select ref={Category} defaultValue={categoryValue} onChange={CategoryOnChange} className="w-100">
                  <option className="bs-title-option" value="">
                    Select Category
                  </option>
                  {AllCategories &&
                    AllCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>

                {/* <div className="dropdown-menu ">
                  <div className="bs-searchbox">
                    <input
                      ref={Type}
                      defaultValue={TypeValue}
                      onChange={TypeOnChange}
                      type="search"
                      className="form-control"
                      autoComplete="off"
                      role="combobox"
                      aria-label="Search"
                      aria-controls="bs-select-1"
                      aria-autocomplete="list"
                    />
                  </div>
                  <div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}>
                    <ul className="dropdown-menu inner show" role="presentation" />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="form-group mb-4">
              <h4 className="section-head-small mb-4">Keyword</h4>
              <div className="input-group">
                <input type="text" ref={Search} defaultValue={searchValue} onChange={SearchOnChange} className="form-control" placeholder="Job Title or Keyword" />
              </div>
            </div>
            <div className="form-group mb-4">
              <h4 className="section-head-small mb-4">Country</h4>
              <div className="input-group">
                <input type="text" ref={Country} defaultValue={countryValue} onChange={CountryOnChange} className="form-control" placeholder="Search Country" />
              </div>
            </div>
            <div className="sidebar-ele-filter">
              <h4 className="section-head-small mb-4">Job Type</h4>
              <ul>
                <li>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Freelance
                    </label>
                  </div>
                  <span className="job-type-count">09</span>
                </li>
                <li>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                    <label className="form-check-label" htmlFor="exampleCheck2">
                      Full Time
                    </label>
                  </div>
                  <span className="job-type-count">07</span>
                </li>
                <li>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck3" />
                    <label className="form-check-label" htmlFor="exampleCheck3">
                      Internship
                    </label>
                  </div>
                  <span className="job-type-count">15</span>
                </li>
                <li>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck4" />
                    <label className="form-check-label" htmlFor="exampleCheck4">
                      Part Time
                    </label>
                  </div>
                  <span className="job-type-count">20</span>
                </li>
                <li>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck5" />
                    <label className="form-check-label" htmlFor="exampleCheck5">
                      Temporary
                    </label>
                  </div>
                  <span className="job-type-count">22</span>
                </li>
                <li>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck6" />
                    <label className="form-check-label" htmlFor="exampleCheck6">
                      Volunteer
                    </label>
                  </div>
                  <span className="job-type-count">25</span>
                </li>
              </ul>
            </div>
            <div className="sidebar-ele-filter">
              <h4 className="section-head-small mb-4">Date Posts</h4>
              <ul>
                <li>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="exampleradio1" />
                    <label className="form-check-label" htmlFor="exampleradio1">
                      Last hour
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="exampleradio2" />
                    <label className="form-check-label" htmlFor="exampleradio2">
                      Last 24 hours
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="exampleradio3" />
                    <label className="form-check-label" htmlFor="exampleradio3">
                      Last 7 days
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="exampleradio4" />
                    <label className="form-check-label" htmlFor="exampleradio4">
                      Last 14 days
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="exampleradio5" />
                    <label className="form-check-label" htmlFor="exampleradio5">
                      Last 30 days
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="exampleradio6" />
                    <label className="form-check-label" htmlFor="exampleradio6">
                      All
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sidebar-ele-filter">
              <h4 className="section-head-small mb-4">Type of employment</h4>
              <ul>
                <li>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="Freelance1" />
                    <label className="form-check-label" htmlFor="Freelance1">
                      Freelance
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="FullTime1" />
                    <label className="form-check-label" htmlFor="FullTime1">
                      Full Time
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="Intership1" />
                    <label className="form-check-label" htmlFor="Intership1">
                      Intership
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="Part-Time1" />
                    <label className="form-check-label" htmlFor="Part-Time1">
                      Part Time
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div className="widget tw-sidebar-tags-wrap">
          <h4 className="section-head-small mb-4">Tags</h4>
          <div className="tagcloud">
            <a href="job-list.html">General</a>
            <a href="job-list.html">Jobs </a>
            <a href="job-list.html">Payment</a>
            <a href="job-list.html">Application </a>
            <a href="job-list.html">Work</a>
            <a href="job-list.html">Recruiting</a>
            <a href="job-list.html">Employer</a>
            <a href="job-list.html">Income</a>
            <a href="job-list.html">Tips</a>
          </div>
        </div>
      </div>
    </div>
  );
}
