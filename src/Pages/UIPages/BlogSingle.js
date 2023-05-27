import React from "react";
import { Link } from "react-router-dom";

import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";

import footerbg from "../../Assets/images/bg/footerbg.png";

export default function BlogSingle() {
  return (
    <>
      <SinglePageHeader PageTitle="Bost title" />

      <div className="section-full p-t120 p-b90 bg-white" style={{ transform: "none" }}>
        <div className="container" style={{ transform: "none" }}>
          {/* BLOG SECTION START */}
          <div className="section-content" style={{ transform: "none" }}>
            <div className="row d-flex justify-content-center" style={{ transform: "none" }}>
              <div className="col-lg-10 col-md-12">
                {/* BLOG START */}
                <div className="blog-post-single-outer">
                  <div className="blog-post-single bg-white">
                    <div className="wt-post-info">
                      <div className="wt-post-media m-b30">
                        <img src={footerbg} alt="" />
                      </div>
                      <div className="wt-post-title">
                        <div className="wt-post-meta-list">
                          <div className="wt-list-content post-date">April 05, 2023</div>
                        </div>
                        <h3 className="post-title">How to convince recruiters and get your dream job</h3>
                      </div>
                      <div className="wt-post-discription">
                        <p>
                          Please make sure you understand what rights you are claiming before you submit a DMCA takedown notice because it is a serious legal document. Consider whether you need legal
                          advice. It's really important not to make false claims as this could have serious legal consequences.
                        </p>
                        <p>
                          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros
                          porttitor mattis. Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Harvel is a copyright
                          protection platform for next-gen creators, crawling the web on a daily basis in order to find piracy links and copyright infringement of your content. I
                        </p>
                        <h4 className="blog-s-title">About Business Network</h4>
                        <p>
                          Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod and pellentesque vel, sagittis vel justo. In libero urna, venenatis sit
                          amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales.
                        </p>
                        <div className="wt-post-discription">
                          <blockquote>
                            <p>
                              <span>"</span> A business consulting agency is involved in the planning, implementation, and education of businesses.
                            </p>
                            <strong>Richard Anderson</strong>
                          </blockquote>
                        </div>
                        <h4 className="blog-s-title">Get Your Resume Done Right</h4>
                        <p>
                          Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod and pellentesque vel, sagittis vel justo. In libero urna, venenatis sit
                          amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales.
                        </p>
                      </div>
                      <div className="post-single-list">
                        <ul className="description-list-2">
                          <li>
                            <i className="feather-check" />
                            You need to create an account to find the best and preferred job.
                          </li>
                          <li>
                            <i className="feather-check" />
                            After creating the account, you have to apply for the desired job.
                          </li>
                          <li>
                            <i className="feather-check" />
                            After filling all the relevant information you have to upload your resume.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="post-area-tags-wrap">
                    <div className="post-social-icons-wrap">
                      <h4 className="mb-4">Share</h4>
                      <ul className="post-social-icons">
                        <li>
                          <a href="javascript:void(0);" className="fab fa-facebook-f" />
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="fab fa-twitter" />
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="fab fa-linkedin-in" />
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="fab fa-google" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-navigation m-t30">
                    <div className="post-nav-links">
                      <div className="post-nav-item nav-post-prev">
                        <div className="nav-post-arrow">
                          <Link to="blog-slug">
                            <i className="fa fa-angle-left" />
                          </Link>
                        </div>
                        <div className="nav-post-meta">
                          <Link to="blog-slug">The wise man therefore always holds in these matters to this principle</Link>
                        </div>
                      </div>
                      <div className="post-nav-item nav-post-next">
                        <div className="nav-post-arrow">
                          <Link to="blog-slug">
                            <i className="fa fa-angle-right" />
                          </Link>
                        </div>
                        <div className="nav-post-meta">
                          <Link to="blog-slug">Rejects pleasures to secure other greater pleasures</Link>
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
    </>
  );
}
