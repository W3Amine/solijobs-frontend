import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function ManagerProfileSideBar() {
  return (
    <div className="theiaStickySidebar">
      <div className="side-bar-st-1">
        <div className="candidate-profile-pic">
          <img src="https://i.ibb.co/748qDqm/company.jpg" alt="avatar" />
          <div className="upload-btn-wrapper">
            <div id="upload-image-grid" />
            <button className="site-button button-sm">Upload Photo</button>
            <input type="file" name="myfile" id="file-uploader" accept=".jpg, .jpeg, .png" />
          </div>
        </div>
        <div className="mid-content text-center">
          <Link to="candidate-detail.html" className="job-title">
            <h4>Randall Henderson</h4>
          </Link>
          <p>Manager</p>
        </div>
        <div className="nav-list-1">
          <ul>
            <li>
              <NavLink to="verifyJobs">
                <i className="fa fa-user" />
                Verify Jobs
              </NavLink>
            </li>

            <li>
              <Link to="/logout">
                <i class="fa fa-share-square"></i> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
