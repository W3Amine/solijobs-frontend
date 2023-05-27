import React from "react";
import { Link } from "react-router-dom";

export default function JobItem() {
  return (
    <li>
      <div className="jobs-list-style1 mb-5">
        <div className="media">
          <img src="https://i.ibb.co/748qDqm/company.jpg" alt="#" />
        </div>
        <div className="mid-content">
          <Link to="/jobs/job-Id" className="job-title">
            <h4>
              Senior Web Designer
              <span className="job-post-duration">/ 1 days ago</span>
            </h4>
          </Link>
          <p className="job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
          <Link to="/jobs/job-Id" className="job-websites site-text-primary">
            https://SoliJobs.com
          </Link>
        </div>
        <div className="right-content">
          <div className="jobs-category green">
            <span className="bg-green">New</span>
            {/* <span className="bg-brown">Intership</span>
            <span className="bg-purple">Fulltime</span>
            <span className="bg-sky">Freelancer</span>
            <span className="bg-golden">Temporary</span> */}
          </div>
          <div className="jobs-amount">
            $2500 <span>/ Month</span>
          </div>
          <Link to="/jobs/job-Id" className="jobs-browse site-text-primary">
            Browse Job
          </Link>
        </div>
      </div>
    </li>
  );
}
