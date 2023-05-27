import React from "react";
import BigTitle from "../../Components/UIComponents/BigTitle";
import ApplyForDreamJob from "../../Assets/images/icons/ApplyForDreamJob.png";
import RegisterYourAccount from "../../Assets/images/icons/RegisterYourAccount.png";
import UploadYourCV from "../../Assets/images/icons/UploadYourCV.png";

export default function HowItWorksSection() {
  return (
    <div className="section-full p-t50 p-b40 site-bg-gray how-it-work-area">
      <div className="container">
        {/* # START TITLE component */}
        <BigTitle LittleTitleValue="Working Process" BigTitleValue="How It Works 🤗" />
        {/* # END TITLE component */}

        <div className="how-it-work-section3">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="w-process-steps3">
                <div className="w-pro-top">
                  <span className="large-number text-clr-sky">01</span>
                  <div className="media bg-clr-sky">
                    <span>
                      <img src={ApplyForDreamJob} alt="ApplyForDreamJob" />
                    </span>
                  </div>
                </div>
                <h4 className="title">Register Your Account</h4>
                <p>You need to create an account to find the best and preferred job.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="w-process-steps3">
                <div className="w-pro-top">
                  <span className="large-number text-clr-pink">02</span>
                  <div className="media bg-clr-pink">
                    <span>
                      <img src={RegisterYourAccount} alt="RegisterYourAccount" />
                    </span>
                  </div>
                </div>
                <h4 className="title">Apply For Dream Job</h4>
                <p>You need to create an account to find the best and preferred job.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="w-process-steps3">
                <div className="w-pro-top">
                  <span className="large-number text-clr-green">03</span>
                  <div className="media bg-clr-green">
                    <span>
                      <img src={UploadYourCV} alt="UploadYourCV" />
                    </span>
                  </div>
                </div>
                <h4 className="title">Upload Your CV</h4>
                <p>You need to create an account to find the best and preferred job.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
