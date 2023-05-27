import React from "react";

export default function PostJobs() {
  return (
    <form>
      {/*Basic Information*/}
      <div className="panel panel-default">
        <div className="panel-heading wt-panel-heading p-a20">
          <h4 className="panel-tittle m-a0">
            <i className="fa fa-suitcase" />
            Job Details
          </h4>
        </div>
        <div className="panel-body wt-panel-body p-a20 m-b30">
          <div className="row">
            {/*Job title*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Job Title</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_name" type="text" placeholder="Devid Smith" />
                  <i className="fs-input-icon fa fa-address-card" />
                </div>
              </div>
            </div>
            {/*Job Category*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>Job Category</label>
                <div className="ls-inputicon-box">
                  <div className="dropdown bootstrap-select wt-select-box">
                    <select className="wt-select-box selectpicker" data-live-search="true" title="" id="j-category" data-bv-field="size">
                      <option disabled="" selected="" value="">
                        Select Category
                      </option>
                      <option>Accounting and Finance</option>
                      <option>Clerical &amp; Data Entry</option>
                      <option>Counseling</option>
                      <option>Court Administration</option>
                      <option>Human Resources</option>
                      <option>Investigative</option>
                      <option>IT and Computers</option>
                      <option>Law Enforcement</option>
                      <option>Management</option>
                      <option>Miscellaneous</option>
                      <option>Public Relations</option>
                    </select>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="btn dropdown-toggle bs-placeholder btn-light"
                      data-bs-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-1"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      title="Select Category"
                      data-id="j-category"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">Select Category</div>
                        </div>{" "}
                      </div>
                    </button>
                    <div className="dropdown-menu ">
                      <div className="bs-searchbox">
                        <input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-1" aria-autocomplete="list" />
                      </div>
                      <div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}>
                        <ul className="dropdown-menu inner show" role="presentation" />
                      </div>
                    </div>
                  </div>
                  <i className="fs-input-icon fa fa-border-all" />
                </div>
              </div>
            </div>
            {/*Job Type*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Job Type</label>
                <div className="ls-inputicon-box">
                  <div className="dropdown bootstrap-select wt-select-box">
                    <select className="wt-select-box selectpicker" data-live-search="true" title="" id="s-category" data-bv-field="size">
                      <option className="bs-title-option" value="">
                        Select Category
                      </option>
                      <option>Full Time</option>
                      <option>Freelance</option>
                      <option>Part Time</option>
                      <option>Internship</option>
                      <option>Temporary</option>
                    </select>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="btn dropdown-toggle bs-placeholder btn-light"
                      data-bs-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-2"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      title="Select Category"
                      data-id="s-category"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">Select Category</div>
                        </div>{" "}
                      </div>
                    </button>
                    <div className="dropdown-menu ">
                      <div className="bs-searchbox">
                        <input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-2" aria-autocomplete="list" />
                      </div>
                      <div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1}>
                        <ul className="dropdown-menu inner show" role="presentation" />
                      </div>
                    </div>
                  </div>
                  <i className="fs-input-icon fa fa-file-alt" />
                </div>
              </div>
            </div>
            {/*Offered Salary*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Offered Salary</label>
                <div className="ls-inputicon-box">
                  <div className="dropdown bootstrap-select wt-select-box">
                    <select className="wt-select-box selectpicker" data-live-search="true" title="" id="salary" data-bv-field="size">
                      <option className="bs-title-option" value="">
                        Salary
                      </option>
                      <option>$500</option>
                      <option>$1000</option>
                      <option>$1500</option>
                      <option>$2000</option>
                      <option>$2500</option>
                    </select>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="btn dropdown-toggle bs-placeholder btn-light"
                      data-bs-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-3"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      title="Salary"
                      data-id="salary"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">Salary</div>
                        </div>{" "}
                      </div>
                    </button>
                    <div className="dropdown-menu ">
                      <div className="bs-searchbox">
                        <input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-3" aria-autocomplete="list" />
                      </div>
                      <div className="inner show" role="listbox" id="bs-select-3" tabIndex={-1}>
                        <ul className="dropdown-menu inner show" role="presentation" />
                      </div>
                    </div>
                  </div>
                  <i className="fs-input-icon fa fa-dollar-sign" />
                </div>
              </div>
            </div>
            {/*Experience*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Experience</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_Email" type="email" placeholder="E.g. Minimum 3 years" />
                  <i className="fs-input-icon fa fa-user-edit" />
                </div>
              </div>
            </div>
            {/*Qualification*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Qualification</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_Email" type="email" placeholder="Qualification Title" />
                  <i className="fs-input-icon fa fa-user-graduate" />
                </div>
              </div>
            </div>
            {/*Gender*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Gender</label>
                <div className="ls-inputicon-box">
                  <div className="dropdown bootstrap-select wt-select-box">
                    <select className="wt-select-box selectpicker" data-live-search="true" title="" id="gender" data-bv-field="size">
                      <option className="bs-title-option" value="">
                        Gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="btn dropdown-toggle bs-placeholder btn-light"
                      data-bs-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-4"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      title="Gender"
                      data-id="gender"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">Gender</div>
                        </div>{" "}
                      </div>
                    </button>
                    <div className="dropdown-menu ">
                      <div className="bs-searchbox">
                        <input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-4" aria-autocomplete="list" />
                      </div>
                      <div className="inner show" role="listbox" id="bs-select-4" tabIndex={-1}>
                        <ul className="dropdown-menu inner show" role="presentation" />
                      </div>
                    </div>
                  </div>
                  <i className="fs-input-icon fa fa-venus-mars" />
                </div>
              </div>
            </div>
            {/*Country*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Country</label>
                <div className="ls-inputicon-box">
                  <div className="dropdown bootstrap-select wt-select-box">
                    <select className="wt-select-box selectpicker" data-live-search="true" title="" id="country" data-bv-field="size">
                      <option className="bs-title-option" value="">
                        Country
                      </option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                      <option>Andorra</option>
                      <option>Angola</option>
                      <option>Antigua and Barbuda</option>
                      <option>Argentina</option>
                      <option>Armenia</option>
                      <option>Australia</option>
                      <option>Austria</option>
                      <option>Azerbaijan</option>
                      <option>The Bahamas</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Barbados</option>
                    </select>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="btn dropdown-toggle bs-placeholder btn-light"
                      data-bs-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-5"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      title="Country"
                      data-id="country"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">Country</div>
                        </div>{" "}
                      </div>
                    </button>
                    <div className="dropdown-menu ">
                      <div className="bs-searchbox">
                        <input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-5" aria-autocomplete="list" />
                      </div>
                      <div className="inner show" role="listbox" id="bs-select-5" tabIndex={-1}>
                        <ul className="dropdown-menu inner show" role="presentation" />
                      </div>
                    </div>
                  </div>
                  <i className="fs-input-icon fa fa-globe-americas" />
                </div>
              </div>
            </div>
            {/*City*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>City</label>
                <div className="ls-inputicon-box">
                  <div className="dropdown bootstrap-select wt-select-box">
                    <select className="wt-select-box selectpicker" data-live-search="true" title="" id="city" data-bv-field="size">
                      <option className="bs-title-option" value="">
                        City
                      </option>
                      <option>Sydney</option>
                      <option>Melbourne</option>
                      <option>Brisbane</option>
                      <option>Perth</option>
                      <option>Adelaide</option>
                      <option>Gold Coast</option>
                      <option>Cranbourne</option>
                      <option>Newcastle</option>
                      <option>Wollongong</option>
                      <option>Geelong</option>
                      <option>Hobart</option>
                      <option>Townsville</option>
                      <option>Ipswich</option>
                    </select>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="btn dropdown-toggle bs-placeholder btn-light"
                      data-bs-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-6"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      title="City"
                      data-id="city"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">City</div>
                        </div>{" "}
                      </div>
                    </button>
                    <div className="dropdown-menu ">
                      <div className="bs-searchbox">
                        <input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-6" aria-autocomplete="list" />
                      </div>
                      <div className="inner show" role="listbox" id="bs-select-6" tabIndex={-1}>
                        <ul className="dropdown-menu inner show" role="presentation" />
                      </div>
                    </div>
                  </div>
                  <i className="fs-input-icon fa fa-map-marker-alt" />
                </div>
              </div>
            </div>
            {/*Location*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Location</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_Email" type="email" placeholder="Type Address" />
                  <i className="fs-input-icon fa fa-map-marker-alt" />
                </div>
              </div>
            </div>
            {/*Latitude*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Latitude</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_Email" type="email" placeholder="Los Angeles" />
                  <i className="fs-input-icon fa fa-map-pin" />
                </div>
              </div>
            </div>
            {/*longitude*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Longitude</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_Email" type="email" placeholder="Los Angeles" />
                  <i className="fs-input-icon fa fa-map-pin" />
                </div>
              </div>
            </div>
            {/*Email Address*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Email Address</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_Email" type="email" placeholder="Devid@example.com" />
                  <i className="fs-input-icon fas fa-at" />
                </div>
              </div>
            </div>
            {/*Website*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Website</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_website" type="text" placeholder="https://.../" />
                  <i className="fs-input-icon fa fa-globe-americas" />
                </div>
              </div>
            </div>
            {/*Est. Since*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Est. Since</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_since" type="text" placeholder="Since..." />
                  <i className="fs-input-icon fa fa-clock" />
                </div>
              </div>
            </div>
            {/*Complete Address*/}
            <div className="col-xl-12 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Complete Address</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_since" type="text" placeholder="1363-1385 Sunset Blvd Los Angeles, CA 90026, USA" />
                  <i className="fs-input-icon fa fa-home" />
                </div>
              </div>
            </div>
            {/*Description*/}
            <div className="col-md-12">
              <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" rows={3} placeholder="Greetings! We are Galaxy Software Development Company. We hope you enjoy our services and quality." defaultValue={""} />
              </div>
            </div>
            {/*Start Date*/}
            <div className="col-md-6">
              <div className="form-group">
                <label>Start Date</label>
                <div className="ls-inputicon-box">
                  <input className="form-control datepicker" data-provide="datepicker" name="company_since" type="text" placeholder="mm/dd/yyyy" />
                  <i className="fs-input-icon far fa-calendar" />
                </div>
              </div>
            </div>
            {/*End Date*/}
            <div className="col-md-6">
              <div className="form-group">
                <label>End Date</label>
                <div className="ls-inputicon-box">
                  <input className="form-control datepicker" data-provide="datepicker" name="company_since" type="text" placeholder="mm/dd/yyyy" />
                  <i className="fs-input-icon far fa-calendar" />
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="text-left">
                <button type="submit" className="site-button m-r5">
                  Publish Job
                </button>
                <button type="submit" className="site-button outline-primary">
                  Save Draft
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
