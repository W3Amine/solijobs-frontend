import React, { useEffect } from "react";
import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";
import footerbg from "../../Assets/images/bg/footerbg.png";
import Jobs from "../../API/Jobs/Jobs";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function JobSingle() {
  const { GetJobDetails, JobDetails } = Jobs();
  const params = useParams();
  const JobId = params.SingleJobId;

  console.log(JobId);
  useEffect(() => {
    GetJobDetails(JobId);
  }, []);

  if (!JobDetails) {
    return "loading ...";
  }

  let type = "";

  switch (JobDetails.type) {
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

  return (
    <>
      <SinglePageHeader PageTitle={JobDetails.title} />

      <div className="section-full p-t120 p-b90 bg-white">
        <div className="container">
          {/* BLOG SECTION START */}
          <div className="section-content">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8 col-md-12">
                {/* Candidate detail START */}
                <div className="cabdidate-de-info">
                  <div className="job-self-wrap">
                    <div className="job-self-info">
                      <div className="job-self-top">
                        <div className="media-bg">
                          <img src={footerbg} alt="#" />
                          <div className="jobs-category green">{parse(type)}</div>
                        </div>
                        <div className="mid-content">
                          <div className="media">
                            <img src={JobDetails.profileImage} alt="#" />
                          </div>
                          <h4 className="job-title">
                            {JobDetails.title} <span className="job-post-duration">/ {JobDetails.created_at}</span>
                          </h4>
                          <p className="job-address">
                            <i className="feather-map-pin" />
                            {JobDetails.address}
                          </p>
                          <div className="job-self-mid">
                            <div className="job-self-mid-left">
                              <a href="" className="job-websites site-text-primary">
                                {JobDetails.address}
                              </a>
                              <div className="jobs-amount">
                                {JobDetails.salary} <span>/ Month</span>
                              </div>
                            </div>
                            <div className="job-apllication-area">
                              {/* Application ends:
                              <span className="job-apllication-date">October 1, 2025</span> */}
                            </div>
                          </div>
                          <div className="job-self-bottom">
                            <a className="site-button" data-bs-toggle="modal" href="#apply_job_popup" role="button">
                              {" "}
                              Apply Now{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="s-title">Job Description:</h4>
                  <p>{JobDetails.description}</p>

                  <h4 className="s-title">Share Profile</h4>
                  <div className="social-tags">
                    <a href="javascript:void(0)" className="fb-clr">
                      Facebook
                    </a>
                    <a href="javascript:void(0)" className="tw-clr">
                      Twitter
                    </a>
                    <a href="javascript:void(0)" className="link-clr">
                      Linkedin
                    </a>
                    <a href="javascript:void(0)" className="whats-clr">
                      Whatsapp
                    </a>
                    <a href="javascript:void(0)" className="pinte-clr">
                      Pinterest
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-12 rightSidebar"
                style={{
                  position: "relative",
                  overflow: "visible",
                  boxSizing: "border-box",
                  minHeight: 1,
                }}
              >
                <div
                  className="theiaStickySidebar"
                  style={{
                    paddingTop: 0,
                    paddingBottom: 1,
                    position: "static",
                    transform: "none",
                    top: 0,
                    left: "1158.5px",
                  }}
                >
                  <div className="side-bar mb-4">
                    <div className="s-info2-wrap mb-5">
                      <div className="s-info2">
                        <h4 className="section-head-small mb-4">Job Information</h4>
                        {/* <ul className="job-hilites">
                          <li>
                            <i className="fas fa-calendar-alt" />
                            <span className="title">{JobDetails.created_at}</span>
                          </li> */}
                        {/* <li>
                            <i className="fas fa-eye" />
                            <span className="title">8160 Views</span>
                          </li>
                          <li>
                            <i className="fas fa-file-signature" />
                            <span className="title">6 Applicants</span>
                          </li> */}
                        {/* </ul> */}
                        <ul className="job-hilites2">
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-calendar-alt" />
                              <span className="title">Date Posted</span>
                              <div className="s-info-discription">{JobDetails.created_at}</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-map-marker-alt" />
                              <span className="title">Location</span>
                              <div className="s-info-discription">
                                {JobDetails.city}, {JobDetails.country}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-user-tie" />
                              <span className="title">Job Title</span>
                              <div className="s-info-discription">{JobDetails.title}</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-clock" />
                              <span className="title">Experience</span>
                              <div className="s-info-discription">{JobDetails.experience}</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-suitcase" />
                              <span className="title">Qualification</span>
                              <div className="s-info-discription">{JobDetails.qualification}</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-venus-mars" />
                              <span className="title">Gender</span>
                              <div className="s-info-discription">{JobDetails.gender}</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-money-bill-wave" />
                              <span className="title">Offered Salary</span>
                              <div className="s-info-discription">{JobDetails.salary} / Month</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div className="widget tw-sidebar-tags-wrap">
                      <h4 className="section-head-small mb-4">Job Skills</h4>
                      <div className="tagcloud">
                        <a href="javascript:void(0)">Html</a>
                        <a href="javascript:void(0)">Python</a>
                        <a href="javascript:void(0)">WordPress</a>
                        <a href="javascript:void(0)">JavaScript</a>
                        <a href="javascript:void(0)">Figma</a>
                        <a href="javascript:void(0)">Angular</a>
                        <a href="javascript:void(0)">Reactjs</a>
                        <a href="javascript:void(0)">Drupal</a>
                        <a href="javascript:void(0)">Joomla</a>
                      </div>
                    </div> */}
                  </div>
                  <div className="s-info3-wrap mb-5">
                    <div className="s-info3">
                      <div className="s-info-logo-section">
                        <div className="media">
                          <img src={JobDetails.profileImage} alt="#" />
                        </div>
                        <h4 className="title">{JobDetails.title}</h4>
                      </div>
                      <ul>
                        <li>
                          <div className="s-info-inner">
                            <i className="fas fa-building" />
                            <span className="title">Company</span>
                            <div className="s-info-discription">{JobDetails.name}</div>
                          </div>
                        </li>
                        <li>
                          <div className="s-info-inner">
                            <i className="fas fa-mobile-alt" />
                            <span className="title">Phone</span>
                            <div className="s-info-discription">{JobDetails.phoneNumber}</div>
                          </div>
                        </li>
                        <li>
                          <div className="s-info-inner">
                            <i className="fas fa-at" />
                            <span className="title">Email</span>
                            <div className="s-info-discription">{JobDetails.email}</div>
                          </div>
                        </li>
                        <li>
                          <div className="s-info-inner">
                            <i className="fas fa-desktop" />
                            <span className="title">Website</span>
                            <div className="s-info-discription">{JobDetails.website}</div>
                          </div>
                        </li>
                        <li>
                          <div className="s-info-inner">
                            <i className="fas fa-map-marker-alt" />
                            <span className="title">Address</span>
                            <div className="s-info-discription">{JobDetails.address}</div>
                          </div>
                        </li>
                      </ul>
                      {/* <a href="about-1.html" className="site-button">
                        Vew Profile
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
