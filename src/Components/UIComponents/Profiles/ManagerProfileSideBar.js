import React from "react";
import { Link, NavLink } from "react-router-dom";
import SideBarAvatar from "./SideBarAvatar";

export default function ManagerProfileSideBar() {
  return (
    <div className="theiaStickySidebar">
      <div className="side-bar-st-1">
        <SideBarAvatar />
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
