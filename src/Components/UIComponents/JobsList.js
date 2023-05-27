import React from "react";
import JobItem from "./JobItem";

export default function JobsList() {
  return (
    <div className="jobs-list-wrap">
      <ul>
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
      </ul>
    </div>
  );
}
