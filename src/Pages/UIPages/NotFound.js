import React from "react";
import { Link } from "react-router-dom";

import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";
import error404 from "../../Assets/images/error-404.png";

export default function NotFound() {
  return (
    <>
      <SinglePageHeader PageTitle="We Are Sorry, Page Not Found" />

      {/* START # 404 NOT FOUND CONTENT */}
      <div className="container">
        <div className="error-wrap">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="error-image">
                <img src={error404} alt="Error-404" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="error-content">
                <h2 className="error-title">404</h2>
                <h4 className="error-title2 site-text-primary">We Are Sorry, Page Not Found</h4>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to="/" className="site-button">
                  Go To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END # 404 NOT FOUND CONTENT */}
    </>
  );
}
