import React from "react";
import { Link } from "react-router-dom";

import HomeHeader from "../../Components/UIComponents/HomeHeader";
import CategoriesSection from "../../Components/UIComponents/CategoriesSection";
import BigTitle from "../../Components/UIComponents/BigTitle";
import JobsList from "../../Components/UIComponents/JobsList";
import HowItWorksSection from "../../Components/UIComponents/HowItWorksSection";
import BlogGrid from "../../Components/UIComponents/BlogGrid";
export default function Home() {
  return (
    <>
      <HomeHeader />
      {/* START # JOBS CATEGORIES SECTION  */}
      <div className="section-full p-t50 site-bg-gray job-categories-area2">
        {/* # START TITLE component */}
        <BigTitle LittleTitleValue="Jobs by Categories" BigTitleValue="Choose A Category 🔍" />
        {/* # END TITLE component */}

        <div className="container">
          <div className="job-categories-section-2">
            <div className="job-categories-style1 m-b30">
              {/* START # JOBS CATEGORIES SECTION Component */}
              <CategoriesSection />
              {/* END # JOBS CATEGORIES SECTION Component */}
            </div>
            <div className="text-center job-categories-btn">
              <Link to="categories" className="site-button">
                All Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* END # JOBS CATEGORIES SECTION  */}

      {/* START # Job posts Section*/}

      <div className="section-full p-t50 p-b40 site-bg-light-purple bg-ring-wrap">
        <div className="container">
          {/* # START TITLE component */}
          <BigTitle LittleTitleValue="All Jobs Post" BigTitleValue="Find Your Job Now 🥳" />
          {/* # END TITLE component */}

          <div className="section-content">
            {/* START # Jobs List Component */}
            <JobsList />
            {/* END # Jobs List Component */}

            <div className="text-center m-b30">
              <Link to="jobs" className="site-button">
                Browse All Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* END # Job Posts Section*/}

      {/* START # HOW IT WORKS Section*/}
      <HowItWorksSection />
      {/* END # HOW IT WORKS Section*/}

      {/* START # Job posts Section*/}

      <div className="section-full p-t50 p-b40 site-bg-light-purple bg-ring-wrap">
        <div className="container">
          {/* # START TITLE component */}
          <BigTitle LittleTitleValue="Our Blogs" BigTitleValue="Latest Articles 📰" />
          {/* # END TITLE component */}

          <div className="section-content">
            {/* START # Jobs List Component */}
            <BlogGrid />
            {/* END # Jobs List Component */}

            <div className="text-center m-b30">
              <Link to="blog" className="site-button">
                Browse All Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* END # Job Posts Section*/}
    </>
  );
}
