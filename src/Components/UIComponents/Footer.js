import React from "react";
import footerbg from "../../Assets/images/bg/footerbg.png";
import SoliJobLogoblackbg from "../../Assets/images/logos/SoliJobLogoblackbg.png";

export default function Footer() {
  return (
    <>
      {/* FOOTER START */}
      <footer
        className="footer-dark"
        style={{
          backgroundImage: "url(" + footerbg + ")",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          {/* FOOTER BLOCKES START */}
          <div className="">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="widget widget_about">
                  <div className="logo-footer clearfix">
                    <a href="index.html">
                      <img src={SoliJobLogoblackbg} alt="" />
                    </a>
                  </div>
                  <p>Unlock Your Potential, Discover Your Dream Job!</p>
                  <ul className="ftr-list">
                    <li>
                      <p>
                        <span>Address :</span>Bni Waryaghel 90000 Tanger, Maroc
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Email :</span>contact@SoliJob.com
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Call :</span>999-999-999
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 col-md-12">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">For Candidate</h3>
                      <ul>
                        <li>
                          <a href="dashboard.html">User Dashboard</a>
                        </li>
                        <li>
                          <a href="dash-resume-alert.html">Alert resume</a>
                        </li>
                        <li>
                          <a href="candidate-grid.html">Candidates</a>
                        </li>
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Blog single</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">Helpful Resources</h3>
                      <ul>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                        <li>
                          <a href="employer-detail.html">Employer detail</a>
                        </li>
                        <li>
                          <a href="dash-my-profile.html">Profile</a>
                        </li>
                        <li>
                          <a href="error-404.html">404 Page</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">Quick Links</h3>
                      <ul>
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about-1.html">About us</a>
                        </li>
                        <li>
                          <a href="dash-bookmark.html">Bookmark</a>
                        </li>
                        <li>
                          <a href="job-grid.html">Jobs</a>
                        </li>
                        <li>
                          <a href="employer-list.html">Employer</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FOOTER COPYRIGHT */}
          <div className="footer-bottom">
            <div className="footer-bottom-info">
              <div className="footer-copy-right">
                <span className="copyrights-text">Copyright © 2023 by amine All Rights Reserved.</span>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="javascript:void(0);" className="fab fa-facebook-f" />
                </li>
                <li>
                  <a href="javascript:void(0);" className="fab fa-twitter" />
                </li>
                <li>
                  <a href="javascript:void(0);" className="fab fa-instagram" />
                </li>
                <li>
                  <a href="javascript:void(0);" className="fab fa-youtube" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER END */}
      {/* BUTTON TOP START */}
      <button className="scroltop">
        <span className="fa fa-angle-up relative" id="btn-vibrate" />
      </button>
    </>
  );
}
