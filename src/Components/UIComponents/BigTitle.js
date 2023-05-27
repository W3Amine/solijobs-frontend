import React from "react";

export default function BigTitle(props) {
  return (
    <>
      {/* TITLE START*/}
      <div className="section-head center wt-small-separator-outer">
        <div className="wt-small-separator site-text-primary">
          <div>{props.LittleTitleValue}</div>
        </div>
        <h2 className="wt-title">{props.BigTitleValue}</h2>
      </div>
      {/* TITLE END*/}
    </>
  );
}
