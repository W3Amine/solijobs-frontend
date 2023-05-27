import React from "react";

export default function FilterSortBy() {
  return (
    <div className="product-filter-wrap d-flex justify-content-between align-items-center m-b30">
      <span className="woocommerce-result-count-left">Showing 2,150 jobs</span>
      <form className="woocommerce-ordering filter-select" method="get">
        <span className="woocommerce-result-count">Short By</span>
        <div className="dropdown bootstrap-select wt-select-bar-2">
          <select className="wt-select-bar-2 selectpicker" data-live-search="true" data-bv-field="size">
            <option>Most Recent</option>
            <option>Freelance</option>
            <option>Full Time</option>
            <option>Internship</option>
            <option>Part Time</option>
            <option>Temporary</option>
          </select>

          <div className="dropdown-menu ">
            <div className="bs-searchbox">
              <input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-2" aria-autocomplete="list" />
            </div>
            <div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1}>
              <ul className="dropdown-menu inner show" role="presentation" />
            </div>
          </div>
        </div>
        <div className="dropdown bootstrap-select wt-select-bar-2">
          <select className="wt-select-bar-2 selectpicker" data-live-search="true" data-bv-field="size">
            <option>Show 10</option>
            <option>Show 20</option>
            <option>Show 30</option>
            <option>Show 40</option>
            <option>Show 50</option>
            <option>Show 60</option>
          </select>

          <div className="dropdown-menu ">
            <div className="bs-searchbox">
              <input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-3" aria-autocomplete="list" />
            </div>
            <div className="inner show" role="listbox" id="bs-select-3" tabIndex={-1}>
              <ul className="dropdown-menu inner show" role="presentation" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
