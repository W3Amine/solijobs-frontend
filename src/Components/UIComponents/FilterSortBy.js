import React, { useRef } from "react";

export default function FilterSortBy({ total, ShowValue, setShow, setType, TypeValue }) {
  const Show = useRef("");
  const Type = useRef("");

  function ShowOnChange() {
    setShow(Show.current.value);
  }

  function TypeOnChange() {
    setType(Type.current.value);
  }
  return (
    <div className="product-filter-wrap d-flex justify-content-between align-items-center m-b30">
      <span className="woocommerce-result-count-left">Showing {total} jobs</span>
      <form className="woocommerce-ordering filter-select" method="get">
        <span className="woocommerce-result-count">Short By</span>
        <div className="dropdown bootstrap-select wt-select-bar-2">
          <select ref={Type} defaultValue={TypeValue} onChange={TypeOnChange} className="wt-select-bar-2 selectpicker" data-live-search="true" data-bv-field="size">
            <option value="">Most Recent</option>
            <option value="Full Time">Full Time</option>
            <option value="Freelance"> Freelance</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
            <option value="Temporary">Temporary</option>
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
          <select ref={Show} defaultValue={ShowValue} onChange={ShowOnChange} className="wt-select-bar-2 selectpicker" data-live-search="true" data-bv-field="size">
            <option value="5">Show 5</option>
            <option value="10">Show 10</option>
            <option value="20">Show 20</option>
            <option value="30">Show 30</option>
            <option value="40">Show 40</option>
            <option value="50">Show 50</option>
            <option value="60">Show 60</option>
            <option value="80">Show 80</option>
            <option value="100">Show 100</option>
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
