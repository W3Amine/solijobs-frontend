import React from "react";
import { Link } from "react-router-dom";
import { LogoutRequest } from "../../../API/Composables/LogoutRequest";
import AuthRolesRenderGate from "../../../AuthGates/RenderingGates/AuthRolesRenderGate";

export default function ProfileAvatar() {
  const { logout } = LogoutRequest();

  return (
    <div className="dropdown">
      <div
        style={{
          borderRadius: "50%",
          backgroundImage: "url(https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "60px",
          height: "60px",
        }}
        id="profileAvatar"
        data-bs-toggle="dropdown"
      ></div>
      <ul class="dropdown-menu" aria-labelledby="profileAvatar">
        <AuthRolesRenderGate Role="candidate">
          <li>
            <Link class="dropdown-item" to="/profile/CandidateInfo">
              profile
            </Link>
            <li>
              <Link class="dropdown-item" to="/profile/AppliedJobs">
                Applied Jobs
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/profile/SavedJobs">
                Saved Jobs
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/profile/CVManager">
                CV Manager
              </Link>
            </li>
          </li>
        </AuthRolesRenderGate>

        <AuthRolesRenderGate Role="manager">
          <li>
            <Link class="dropdown-item" to="/ManagerProfile">
              profile
            </Link>
          </li>
          <li>
            <Link class="dropdown-item" to="/ManagerProfile/verifyJobs">
              Verify Jobs
            </Link>
          </li>
        </AuthRolesRenderGate>

        <AuthRolesRenderGate Role="employer">
          <li>
            <Link class="dropdown-item" to="/EmployerProfile/Employerinfo">
              Company Profile
            </Link>
          </li>

          <li>
            <Link class="dropdown-item" to="/EmployerProfile/ManageJobs">
              Manage Jobs
            </Link>
          </li>

          <li>
            <Link class="dropdown-item" to="/EmployerProfile/PostJobs">
              Post A Jobs
            </Link>
          </li>

          <li>
            <Link class="dropdown-item" to="/EmployerProfile/Employerinfo">
              Company Profile
            </Link>
          </li>
        </AuthRolesRenderGate>

        <AuthRolesRenderGate Role="admin">
          <li>
            <Link class="dropdown-item" to="/dashboard">
              dashboard
            </Link>
          </li>
        </AuthRolesRenderGate>
        <li>
          <button  class="dropdown-item" onClick={logout}>
            logout
          </button>
        </li>
      </ul>
    </div>
  );
}
