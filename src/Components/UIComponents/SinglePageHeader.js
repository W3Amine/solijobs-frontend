import React from "react";
import singlepagebg from "../../Assets/images/bg/singlebg.png";

export default function SinglePageHeader(props) {
  return (
    <>
      {/* START # Single Page Header */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{
          backgroundImage: "url(" + singlepagebg + ")",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="overlay-main site-bg-white opacity-01" />
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="wt-title">{props.PageTitle}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END # Single Page Header */}
    </>
  );
}
