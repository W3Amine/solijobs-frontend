import React from "react";
import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";
import footerbg from "../../Assets/images/bg/footerbg.png";

export default function JobSingle() {
  return (
    <>
      <SinglePageHeader PageTitle="JOB title" />

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
                          <div className="jobs-category green">
                            <span className="bg-green">New</span>
                          </div>
                        </div>
                        <div className="mid-content">
                          <div className="media">
                            <img src="https://i.ibb.co/748qDqm/company.jpg" alt="#" />
                          </div>
                          <h4 className="job-title">
                            Senior Web Designer , Developer <span className="job-post-duration">/ 1 days ago</span>
                          </h4>
                          <p className="job-address">
                            <i className="feather-map-pin" />
                            1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                          </p>
                          <div className="job-self-mid">
                            <div className="job-self-mid-left">
                              <a href="https://i.ibb.co/748qDqm/company.jpg" className="job-websites site-text-primary">
                                https://SoliJob.com
                              </a>
                              <div className="jobs-amount">
                                $2000 - $2500 <span>/ Month</span>
                              </div>
                            </div>
                            <div className="job-apllication-area">
                              Application ends:
                              <span className="job-apllication-date">October 1, 2025</span>
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
                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </p>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
                  </p>
                  <h4 className="s-title">Requirments:</h4>
                  <ul className="description-list-2">
                    <li>
                      <i className="feather-check" />
                      Must be able to communicate with others to convey information effectively.
                    </li>
                    <li>
                      <i className="feather-check" />
                      Personally passionate and up to date with current trends and technologies, committed to quality and comfortable working with adult media.
                    </li>
                    <li>
                      <i className="feather-check" />
                      Rachelor or Master degree level educational background.
                    </li>
                    <li>
                      <i className="feather-check" />4 years relevant PHP dev experience.
                    </li>
                    <li>
                      <i className="feather-check" />
                      Troubleshooting, testing and maintaining the core product software and databases.
                    </li>
                  </ul>
                  <h4 className="s-title">Responsabilities:</h4>
                  <ul className="description-list-2">
                    <li>
                      <i className="feather-check" />
                      Establish and promote design guidelines, best practices and standards.
                    </li>
                    <li>
                      <i className="feather-check" />
                      Accurately estimate design tickets during planning sessions.
                    </li>
                    <li>
                      <i className="feather-check" />
                      Partnering with product and engineering to translate business and user goals into elegant and practical designs. that can deliver on key business and user metrics.
                    </li>
                    <li>
                      <i className="feather-check" />
                      Create wireframes, storyboards, user flows, process flows and site maps to communicate interaction and design.
                    </li>
                    <li>
                      <i className="feather-check" />
                      Present and defend designs and key deliverables to peers and executive level stakeholders.
                    </li>
                    <li>
                      <i className="feather-check" />
                      Execute all visual design stages from concept to final hand-off to engineering.
                    </li>
                  </ul>
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
                        <ul className="job-hilites">
                          <li>
                            <i className="fas fa-calendar-alt" />
                            <span className="title">Date Posted</span>
                          </li>
                          <li>
                            <i className="fas fa-eye" />
                            <span className="title">8160 Views</span>
                          </li>
                          <li>
                            <i className="fas fa-file-signature" />
                            <span className="title">6 Applicants</span>
                          </li>
                        </ul>
                        <ul className="job-hilites2">
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-calendar-alt" />
                              <span className="title">Date Posted</span>
                              <div className="s-info-discription">April 22, 2023</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-map-marker-alt" />
                              <span className="title">Location</span>
                              <div className="s-info-discription">Munchen, Germany</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-user-tie" />
                              <span className="title">Job Title</span>
                              <div className="s-info-discription">Web Developer</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-clock" />
                              <span className="title">Experience</span>
                              <div className="s-info-discription">3 Year</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-suitcase" />
                              <span className="title">Qualification</span>
                              <div className="s-info-discription">Bachelor Degree</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-venus-mars" />
                              <span className="title">Gender</span>
                              <div className="s-info-discription">Both</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-money-bill-wave" />
                              <span className="title">Offered Salary</span>
                              <div className="s-info-discription">$2000-$2500 / Month</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget tw-sidebar-tags-wrap">
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
                    </div>
                  </div>
                  <div className="s-info3-wrap mb-5">
                    <div className="s-info3">
                      <div className="s-info-logo-section">
                        <div className="media">
                          <img src="images/jobs-company/pic1.jpg" alt="#" />
                        </div>
                        <h4 className="title">Senior Web Designer , Developer</h4>
                      </div>
                      <ul>
                        <li>
                          <div className="s-info-inner">
                            <i className="fas fa-building" />
                            <span className="title">Company</span>
                            <div className="s-info-discription">Software Development</div>
                          </div>
                        </li>
                        <li>
                          <div className="s-info-inner">
                            <i className="fas fa-mobile-alt" />
                            <span className="title">Phone</span>
                            <div className="s-info-discription">+291 560 56456</div>
                          </div>
                        </li>
                        <li>
                          <div className="s-info-inner">
                            <i className="fas fa-at" />
                            <span className="title">Email</span>
                            <div className="s-info-discription">thewebmaxdemo@gmail.com</div>
                          </div>
                        </li>
                        <li>
                          <div className="s-info-inner">
                            <i className="fas fa-desktop" />
                            <span className="title">Website</span>
                            <div className="s-info-discription">https://themeforest.net</div>
                          </div>
                        </li>
                        <li>
                          <div className="s-info-inner">
                            <i className="fas fa-map-marker-alt" />
                            <span className="title">Address</span>
                            <div className="s-info-discription">1363-1385 Sunset Blvd Angeles, CA 90026 ,USA</div>
                          </div>
                        </li>
                      </ul>
                      <a href="about-1.html" className="site-button">
                        Vew Profile
                      </a>
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
