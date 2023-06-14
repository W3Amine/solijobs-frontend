import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default function JobItem({ usage, JobData }) {
  let type = "";

  switch (JobData.type) {
    case "Full Time":
      type = '<span className="bg-purple">Fulltime</span>';
      break;

    case "Freelance":
      type = '<span className="bg-sky">Freelancer</span>';
      break;

    case "Temporary":
      type = '<span className="bg-golden">Temporary</span>';
      break;

    case "Internship":
      type = '<span className="bg-brown">Intership</span>';
      break;

    case "Part Time":
      type = '<span className="bg-green">Part Time</span>';
      break;

    default:
      break;
  }

  // console.log(JobData.is_active === 0);
  return (
    <li>
      <div className="jobs-list-style1 mb-5">
        <div className="media">
          <img src={JobData.profileImage} alt="#" />
        </div>
        <div className="mid-content">
          <Link to={"/jobs/" + JobData.id} className="job-title">
            <h4>
              {JobData.title}
              <span className="job-post-duration">/ {JobData.created_at}</span>
            </h4>
          </Link>
          <p className="job-address"> {JobData.address}</p>
          <p className="job-websites site-text-primary">
            Country : {JobData.country}
            {usage === "EditAndDelete" && <>{" / Status : " + (JobData.is_active === 0 ? " Not Active " : " Active ")}</>}
          </p>
          <a href={JobData.website} className="jobs-browse site-text-primary">
            {JobData.website}
          </a>
        </div>
        <div className="right-content">
          <div className="jobs-category green">
            {/* <span className="bg-green">New</span> */}
            {/* <span className="bg-brown">Intership</span>
            <span className="bg-purple">Fulltime</span>
            <span className="bg-sky">Freelancer</span>
            <span className="bg-golden">Temporary</span> */}

            {parse(type)}
          </div>
          <div className="jobs-amount">
            {JobData.salary} $<span> / Month</span>
          </div>

          {/* actions Start */}
          {usage == null ? (
            <Link to={"/jobs/" + JobData.id} className="jobs-browse site-text-primary">
              Browse Job
            </Link>
          ) : (
            <div className="">
              <div className="btn-group">
                <div className="btn-group">
                  <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-primary py-1 dropdown-toggle">
                    Actions
                  </button>
                  <ul className="dropdown-menu" style={{}}>
                    {usage === "EditAndDelete" && (
                      <>
                        <li>
                          <Link className="dropdown-item" to={"/jobs/" + JobData.id}>
                            <i className="fa-regular fa-eye me-2" />
                            View Job
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"/EmployerProfile/Applyers/" + JobData.id}>
                            <i className="fa-regular fa-eye me-2" />
                            applied candidates
                          </Link>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-pen-to-square me-2" /> Edit Job
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular me-2 fa-trash-can" />
                            Delete Job
                          </a>
                        </li>
                      </>
                    )}
                    {usage === "Unsave" && (
                      <>
                        <li>
                          <Link className="dropdown-item" to={"/jobs/" + JobData.id}>
                            <i className="fa-regular fa-eye me-2" />
                            View Job
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-bookmark me-2" /> Unsave Job
                          </a>
                        </li>
                      </>
                    )}

                    {usage === "Save" && (
                      <>
                        <li>
                          <Link className="dropdown-item" to={"/jobs/" + JobData.id}>
                            <i className="fa-regular fa-eye me-2" />
                            View Job
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-bookmark me-2" /> Apply
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-bookmark me-2" /> Save Job
                          </a>
                        </li>
                      </>
                    )}

                    {usage === "verifyJobs" && (
                      <>
                        <li>
                          <Link className="dropdown-item" to={"/jobs/" + JobData.id}>
                            <i className="fa-regular fa-eye me-2" />
                            View Job
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-circle-check me-2" /> Activate Job
                          </a>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}
          {/* actions End */}
        </div>
      </div>
    </li>
  );
}
