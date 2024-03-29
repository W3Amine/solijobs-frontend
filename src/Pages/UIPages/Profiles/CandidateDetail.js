import React, { useEffect } from "react";
import SinglePageHeader from "../../../Components/UIComponents/SinglePageHeader";
import bgimage from "../../../Assets/images/bg/footerbg.png";
import GetCandidateData from "../../../API/Composables/Candidate/GetCandidateData";
import { useParams } from "react-router-dom";

export default function CandidateDetail() {
  const params = useParams();
  const CandidateId = params.CandidateId;
  const { CandidateDataById, GetTheCandidateDataById } = GetCandidateData();

  useEffect(() => {
    GetTheCandidateDataById(CandidateId);
  }, []);

  if (!CandidateDataById) {
    return "loading ... ";
  }
  return (
    <>
      <SinglePageHeader PageTitle={CandidateDataById.name} />

      <div className="section-full p-t120 p-b90 bg-white" style={{ transform: "none" }}>
        <div className="container" style={{ transform: "none" }}>
          {/* BLOG SECTION START */}
          <div className="section-content" style={{ transform: "none" }}>
            <div className="row d-flex justify-content-center" style={{ transform: "none" }}>
              <div className="col-lg-8 col-md-12">
                {/* Candidate detail START */}
                <div className="cabdidate-de-info">
                  <div
                    className="candi-self-wrap overlay-wraper"
                    style={{
                      backgroundImage: "url(" + bgimage + ")",
                    }}
                  >
                    <div className="overlay-main site-bg-primary opacity-01" />
                    <div className="candi-self-info">
                      <div className="candi-self-top">
                        {/* <div className="candi-fee">$20 / Day</div> */}
                        <div className="media">
                          <img src={CandidateDataById.profileImage} alt="#" />
                        </div>
                        <div className="mid-content">
                          <h4 className="job-title">{CandidateDataById.name}</h4>
                          {/* <p>Senior UI / UX Designer and Developer at Google INC</p> */}
                          {/* <p className="candidate-address">
                            <i className="feather-map-pin" />
                            United States
                          </p> */}
                        </div>
                      </div>
                      <div className="candi-self-bottom">
                        <a href="javascript:;" className="site-button outline-white">
                          Hire Me Now
                        </a>
                        {CandidateDataById.candidate_profile.cv && (
                          <a href={CandidateDataById.candidate_profile.cv} className="site-button secondry">
                            Download CV
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <h4 className="s-title">About Me</h4>
                  <p>{CandidateDataById.candidate_profile.about}</p>

                  {/* <h4 className="s-title">Skills</h4>
                  <div className="tw-sidebar-tags-wrap">
                    <div className="tagcloud">
                      <a href="javascript:void(0)">Finance</a>
                      <a href="javascript:void(0)">Sales</a>
                      <a href="javascript:void(0)">Part-time</a>
                      <a href="javascript:void(0)">Administration</a>
                      <a href="javascript:void(0)">Retail</a>
                      <a href="javascript:void(0)">Engineering</a>
                      <a href="javascript:void(0)">Developer</a>
                      <a href="javascript:void(0)">Work from home</a>
                      <a href="javascript:void(0)">IT Consulting</a>
                      <a href="javascript:void(0)">Manufacturing</a>
                    </div>
                  </div> */}
                  {/* <h4 className="s-title">Work Experience</h4> */}
                  {/* <div className="timing-list-wrap">
                    <div className="timing-list">
                      <div className="time-list-date">2012 to 2016</div>
                      <div className="time-list-title">Bluetech, Inc</div>
                      <div className="time-list-position">Senior PHP Developer</div>
                      <div className="time-list-discription">
                        <p>
                          One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.
                        </p>
                      </div>
                    </div>
                    <div className="timing-list">
                      <div className="time-list-date">2016 to 2020</div>
                      <div className="time-list-title">Amazon, Inc</div>
                      <div className="time-list-position">IT &amp; Development</div>
                      <div className="time-list-discription">
                        <p>
                          One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.
                        </p>
                      </div>
                    </div>
                    <div className="timing-list">
                      <div className="time-list-date">2020 to 2023</div>
                      <div className="time-list-title">BGoogle, Inc</div>
                      <div className="time-list-position">Senior UI / UX Designer and Developer</div>
                      <div className="time-list-discription">
                        <p>
                          One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.
                        </p>
                      </div>
                    </div>
                  </div>
                  <h4 className="s-title">Education &amp; Training</h4>
                  <div className="timing-list-wrap">
                    <div className="timing-list">
                      <div className="time-list-date">2004 to 2006</div>
                      <div className="time-list-title">BCA - Bachelor of Computer Applications</div>
                      <div className="time-list-position">International University</div>
                      <div className="time-list-discription">
                        <p>
                          One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.
                        </p>
                      </div>
                    </div>
                    <div className="timing-list">
                      <div className="time-list-date">2006 to 2008</div>
                      <div className="time-list-title">MCA - Master of Computer Application</div>
                      <div className="time-list-position">Middle East Technical University</div>
                      <div className="time-list-discription">
                        <p>
                          One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.
                        </p>
                      </div>
                    </div>
                    <div className="timing-list">
                      <div className="time-list-date">2008 to 2011</div>
                      <div className="time-list-title">Design Communication Visual</div>
                      <div className="time-list-position">Design at Massachusetts Institute of Technology &amp; Marketing</div>
                      <div className="time-list-discription">
                        <p>
                          One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.
                        </p>
                      </div>
                    </div>
                  </div> */}
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
                  <div className="side-bar-2">
                    <div className="s-info-wrap mb-5">
                      <h4 className="section-head-small mb-4">Profile Info</h4>
                      <div className="s-info">
                        <ul>
                          <li>
                            {/* <div className="s-info-inner">
                              <i className="fas fa-money-bill-wave" />
                              <span className="title">Offered Salary</span>
                              <div className="s-info-discription">$20 / Day</div>
                            </div> */}
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-clock" />
                              <span className="title">Experience</span>
                              <div className="s-info-discription">{CandidateDataById.candidate_profile.experience}</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-venus-mars" />
                              <span className="title">Gender</span>
                              <div className="s-info-discription">{CandidateDataById.candidate_profile.gender}</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-mobile-alt" />
                              <span className="title">Phone</span>
                              <div className="s-info-discription">{CandidateDataById.phoneNumber}</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-at" />
                              <span className="title">Email</span>
                              <div className="s-info-discription">{CandidateDataById.email}</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-book-reader" />
                              <span className="title">Qualification</span>
                              <div className="s-info-discription">{CandidateDataById.candidate_profile.qualification}</div>
                            </div>
                          </li>
                          <li>
                            <div className="s-info-inner">
                              <i className="fas fa-map-marker-alt" />
                              <span className="title">Address</span>
                              <div className="s-info-discription">{CandidateDataById.candidate_profile.address}</div>
                            </div>
                            <div className="s-info-inner">
                              <i className="fa-regular fa-face-smile" />
                              <span className="title">Age</span>
                              <div className="s-info-discription">{CandidateDataById.candidate_profile.age}</div>
                            </div>
                          </li>
                        </ul>
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
