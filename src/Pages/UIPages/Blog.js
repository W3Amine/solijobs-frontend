import React from "react";

import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";
import BlogGrid from "../../Components/UIComponents/BlogGrid";
import BigTitle from "../../Components/UIComponents/BigTitle";
import Pagination from "../../Components/UIComponents/Pagination";
export default function Blog() {
  return (
    <>
      <SinglePageHeader PageTitle="Blog lol xd" />

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
          </div>
          <Pagination />
        </div>
      </div>
      {/* END # Job Posts Section*/}
    </>
  );
}
