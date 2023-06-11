import React from "react";
import JobItem from "./JobItem";

export default function JobsList({ usage, Jobsdata }) {
  return (
    <div className="jobs-list-wrap">
      <ul>
        {Jobsdata.map((JobData) => (
          <JobItem JobData={JobData} usage={usage} />
        ))}

        {/* <JobItem usage={usage} />
        <JobItem usage={usage} />
        <JobItem usage={usage} />
        <JobItem usage={usage} /> */}
      </ul>
    </div>
  );
}
