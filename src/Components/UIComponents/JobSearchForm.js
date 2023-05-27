import React from "react";

export default function JobSearchForm() {
  return (
    <div className="bnr-search-bar col-md-10 mx-auto">
      <form>
        <div className="row">
          {/*Title*/}
          <div className="form-group col-xl-5  col-md-5">
            <label>What</label>
            <div className="inputicon-box">
              <input name="username" type="text" required="" className="form-control" placeholder="Job Title" />
              <i className="input-icon fas fa-map-marker-alt" />
            </div>
          </div>
          {/*Location*/}
          <div className="form-group col-xl-5  col-md-5">
            <label>Location</label>
            <div className="inputicon-box">
              <input name="username" type="text" required="" className="form-control" placeholder="Job Location" />
              <i className="input-icon fas fa-map-marker-alt" />
            </div>
          </div>
          {/*Find job btn*/}
          <div className="form-group col-xl-2  col-md-2">
            <button type="button" className="site-button">
              Find Job
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
