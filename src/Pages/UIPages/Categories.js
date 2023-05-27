import React from "react";
import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";
import CategoriesSection from "../../Components/UIComponents/CategoriesSection";
import BigTitle from "../../Components/UIComponents/BigTitle";
import Pagination from "../../Components/UIComponents/Pagination";
export default function Categories() {
  return (
    <>
      <SinglePageHeader PageTitle="Categories  lol xd" />

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
          <Pagination />
          </div>
        </div>
      </div>
      {/* END # JOBS CATEGORIES SECTION  */}
    </>
  );
}
