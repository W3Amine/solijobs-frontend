import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Jobs from "../../../../API/Jobs/Jobs";

export default function GetJobApplyers() {
  const { GetJobApplyers, JobApplyersData } = Jobs();
  const params = useParams();
  const JobId = params.JobId;

  useEffect(() => {
    GetJobApplyers(JobId);
  }, [JobId]);

  if (!JobApplyersData) {
    return "loading ...";
  }

  return (
    <div className="col-lg-12 col-md-12">
      <div className="twm-candidates-grid-wrap">
        <div className="row resumes">
          {JobApplyersData.map((JobApplyer) => (
            <div className="col-lg-4 col-md-6">
              <div className="resume resume_featured post-4761 type-resume status-publish hentry resume_region-india resume_category-translations resume_category-web-software-it resume_skill-finance resume_skill-it-consulting resume_skill-java resume_skill-manufacturing resume_skill-php">
                <div className="twm-candidates-grid-style1">
                  <div className="twm-media">
                    <div className="twm-media-pic">
                      <img
                        data-lazyloaded={1}
                        src={"http://localhost:8000/storage/" + JobApplyer.profileImage}
                        decoding="async"
                        className="candidate_photo entered litespeed-loaded"
                        alt="fdfdfdf"
                        data-ll-status="loaded"
                        width={150}
                        height={150}
                      />
                    </div>
                  </div>
                  <div className="twm-mid-content">
                    <a href={JobApplyer.profileImage} className="twm-job-title">
                      <h5>{JobApplyer.name}</h5>
                    </a>
                    {/* <p>Blog Editer</p> */}
                    <Link to={"/candidate/" + JobApplyer.user_id} className="twm-view-prifile site-text-primary">
                      View Profile{" "}
                    </Link>
                  </div>
                  <div className="twm-fot-content">
                    <div className="twm-left-info">
                      <p className="twm-candidate-address">
                        <span className="candidate-location">experience : {JobApplyer.experience}</span>
                      </p>
                      <div className="twm-jobs-vacancies">Age : {JobApplyer.age}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
