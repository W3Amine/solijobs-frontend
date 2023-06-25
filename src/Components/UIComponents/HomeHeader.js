import React from "react";
import homebg from "../../Assets/images/bg/bgmeeting.png";
import JobSearchForm from "./JobSearchForm";

export default function HomeHeader() {
  return (
    <>
      {/*Banner Start*/}
      <header
        className="home3-banner-section site-bg-white bg-cover"
        style={{
          backgroundImage: "url(" + homebg + ")",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="home3-inner-section">
          <div className="bnr-mid-section">
            <div className="bnr-title-large">Discover Your Dream Job!</div>
            <div className="bnr-discription">Type your keyword, then click search to find your perfect job.</div>
            {/* START # Job Search Form Component */}
            {/* <JobSearchForm /> */}
            {/* END # Job Search Form Component */}
          </div>
        </div>
      </header>
      {/*Banner End*/}
    </>
  );
}
