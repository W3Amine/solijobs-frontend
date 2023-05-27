import React from "react";
import bgimage from "../../../Assets/images/bg/footerbg.png";

export default function EmployerDetail() {
  return (
    <div className="page-content" style={{ transform: "none" }}>
      {/* Employer Detail START */}
      <div className="section-full p-t0 p-b90 bg-white" style={{ transform: "none" }}>
        {/*Top Wide banner Start*/}
        <div className="top-wide-banner overlay-wraper" style={{ backgroundImage: "url(" + bgimage + ")" }}>
          <div className="overlay-main site-bg-primary opacity-09" />
          <div className="top-wide-banner-content container">
            <div className="mid-content">
              <div className="employer-self-top">
                <div className="media">
                  <img src="https://i.ibb.co/748qDqm/company.jpg" alt="#" />
                </div>
                <h3 className="job-title">Galaxy Software Development</h3>
                <p className="employer-address">
                  <i className="feather-map-pin" />
                  1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                </p>
                <a href="https://themeforest.net/user/thewebmax/portfolio" className="employer-websites">
                  https://thewebmax.com
                </a>
                <div className="ep-detail-tags">
                  <button className="de-info bg-green">
                    <i className="fa fa-check" /> Verified
                  </button>
                  <button className="de-info bg-brown">
                    <i className="fa fa-heart" /> Add To Favorite
                  </button>
                  <button className="de-info bg-purple">
                    <i className="fa fa-hand-o-right" /> Add Review
                  </button>
                  <button className="de-info bg-sky">
                    <i className="fa fa-eye" /> Viewed
                  </button>
                </div>
              </div>
              <div className="employer-self-bottom">
                <div className="social-btns">
                  <a className="btn facebook" href="javascript:void(0)">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn twitter" href="javascript:void(0)">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn google" href="javascript:void(0)">
                    <i className="fab fa-google" />
                  </a>
                  <a className="btn linkedin" href="javascript:void(0)">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn skype" href="javascript:void(0)">
                    <i className="fab fa-skype" />
                  </a>
                </div>
                <div className="employer-btn-controls">
                  <a href="javascript:;" className="site-button outline-white">
                    Add Review
                  </a>
                  <a href="javascript:;" className="site-button secondry">
                    Follow Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="ani-circle-1 rotate-center" />
          <div className="ani-circle-2 rotate-center" />
        </div>
        {/*Top Wide banner End*/}
        <div className="container" style={{ transform: "none" }}>
          <div className="section-content" style={{ transform: "none" }}>
            <div className="row d-flex justify-content-center" style={{ transform: "none" }}>
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
                    left: "378.5px",
                  }}
                >
                  <div className="side-bar-2">
                    <div className="s-info-wrap mb-5">
                      <h4 className="section-head-small mb-4">Profile Info</h4>
                      <div className="s-info-3">
                        <ul>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-money-bill-wave" />
                              <span className="title">Offered Salary</span>
                              <div className="s-info-discription">$20 / Day</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-clock" />
                              <span className="title">Experience</span>
                              <div className="s-info-discription">6 Year</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-venus-mars" />
                              <span className="title">Gender</span>
                              <div className="s-info-discription">Male</div>
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
                              <i className="fas fa-book-reader" />
                              <span className="title">Qualification</span>
                              <div className="s-info-discription">Developer</div>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                {/* Candidate detail START */}
                <div className="cabdidate-de-info">
                  <h4 className="s-title m-t0">About Company</h4>
                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </p>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
                  </p>
                  <p>
                    Opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident
                    wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like
                    while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.?
                  </p>
                  <h4 className="s-title">Responsabilities</h4>
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
                      Partnering with product and engineering to translate business and user goals.
                    </li>
                  </ul>
                  <div className="two-part-section"></div>
                  <h4 className="s-title">Available Jobs</h4>
                  <div className="jobs-list-wrap">
                    <div className="row">
                      {/*Block one*/}
                      <div className="col-lg-6 col-md-12 m-b30">
                        <div className="jobs-grid-style1">
                          <div className="media">
                            <img src="images/jobs-company/pic1.jpg" alt="#" />
                          </div>
                          <span className="job-post-duration">1 days ago</span>
                          <div className="jobs-category green">
                            <span className="bg-green">New</span>
                          </div>
                          <div className="mid-content">
                            <a href="job-detail.html" className="job-title">
                              <h4>Senior Web Designer , Developer</h4>
                            </a>
                            <p className="job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                            <a href="https://themeforest.net/user/thewebmax/portfolio" className="job-websites site-text-primary">
                              https://thewebmax.com
                            </a>
                          </div>
                          <div className="right-content">
                            <div className="jobs-amount">
                              $2500 <span>/ Month</span>
                            </div>
                            <a href="job-detail.html" className="jobs-browse site-text-primary">
                              Browse Job
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*Block two*/}
                      <div className="col-lg-6 col-md-12 m-b30">
                        <div className="jobs-grid-style1">
                          <div className="media">
                            <img src="images/jobs-company/pic2.jpg" alt="#" />
                          </div>
                          <span className="job-post-duration">15 days ago</span>
                          <div className="jobs-category green">
                            <span className="bg-brown">Intership</span>
                          </div>
                          <div className="mid-content">
                            <a href="job-detail.html" className="job-title">
                              <h4>Senior Rolling Stock Technician</h4>
                            </a>
                            <p className="job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                            <a href="https://themeforest.net/user/thewebmax/portfolio" className="job-websites site-text-primary">
                              https://thewebmax.com
                            </a>
                          </div>
                          <div className="right-content">
                            <div className="jobs-amount">
                              $7 <span>/ Hour</span>
                            </div>
                            <a href="job-detail.html" className="jobs-browse site-text-primary">
                              Browse Job
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*Block three*/}
                      <div className="col-lg-6 col-md-12 m-b30">
                        <div className="jobs-grid-style1">
                          <div className="media">
                            <img src="images/jobs-company/pic3.jpg" alt="#" />
                          </div>
                          <span className="job-post-duration">6 Month ago</span>
                          <div className="jobs-category green">
                            <span className="bg-purple">Fulltime</span>
                          </div>
                          <div className="mid-content">
                            <a href="job-detail.html" className="job-title">
                              <h4 className="job-title">IT Department Manager</h4>
                            </a>
                            <p className="job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                            <a href="https://themeforest.net/user/thewebmax/portfolio" className="job-websites site-text-primary">
                              https://thewebmax.com
                            </a>
                          </div>
                          <div className="right-content">
                            <div className="jobs-amount">
                              $2500 <span>/ Month</span>
                            </div>
                            <a href="job-detail.html" className="jobs-browse site-text-primary">
                              Browse Job
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*Block Four*/}
                      <div className="col-lg-6 col-md-12 m-b30">
                        <div className="jobs-grid-style1">
                          <div className="media">
                            <img src="images/jobs-company/pic4.jpg" alt="#" />
                          </div>
                          <span className="job-post-duration">2 days ago</span>
                          <div className="jobs-category green">
                            <span className="bg-sky">Freelancer</span>
                          </div>
                          <div className="mid-content">
                            <a href="job-detail.html" className="job-title">
                              <h4 className="job-title">Art Production Specialist</h4>
                            </a>
                            <p className="job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                            <a href="https://themeforest.net/user/thewebmax/portfolio" className="job-websites site-text-primary">
                              https://thewebmax.com
                            </a>
                          </div>
                          <div className="right-content">
                            <div className="jobs-amount">
                              $1800 <span>/ Month</span>
                            </div>
                            <a href="job-detail.html" className="jobs-browse site-text-primary">
                              Browse Job
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Employer Detail END */}
    </div>
  );
}
