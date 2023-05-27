import React from "react";
import { Link } from "react-router-dom";

export default function CagetoryItem() {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="job-categories-block-2 m-b30">
        <div className="content">
          <div className="jobs-available">9,185 Jobs</div>
          <Link to="category-slug">Business Development</Link>
        </div>
      </div>
    </div>
  );
}
