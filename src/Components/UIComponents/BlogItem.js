import React from "react";
import BlogImageTest from "../../Assets/images/other/blog.jpg";
import { Link } from "react-router-dom";

export default function BlogItem() {
  return (
    <>
      {/*Block one*/}
      <div className="masonry-item col-lg-4 col-md-4">
        <div className="blog-post blog-post-1-outer">
          <div className="wt-post-media">
            <Link href="/blog/blog-slug">
              <img src={BlogImageTest} alt="" />
            </Link>
          </div>
          <div className="wt-post-info">
            <div className="wt-post-meta">
              <ul>
                <li className="">March 05, 2023</li>
              </ul>
            </div>
            <div className="wt-post-title">
              <h4 className="post-title">
                <Link to="/blog/blog-slug">How to convince recruiters and get your dream job</Link>
              </h4>
            </div>
            <div className="wt-post-text">
              <p>New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.</p>
            </div>
            <div className="wt-post-readmore">
              <Link to="/blog/blog-slug" className="site-button-link site-text-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
