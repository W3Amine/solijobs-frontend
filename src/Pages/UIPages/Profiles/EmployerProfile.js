import React from "react";
import SinglePageHeader from "../../../Components/UIComponents/SinglePageHeader";
import EmployerProfileSideBar from "../../../Components/UIComponents/Profiles/EmployerProfileSideBar";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../../../Contexts/AuthContext";

export default function EmployerProfile() {
    const { user } = useAuthContext();

  return (
    <>
      <SinglePageHeader PageTitle={"Welcome , " + user.name} />
      <div className="section-full p-t120 p-b90 site-bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">
              <EmployerProfileSideBar />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 m-b30">
              {/*Filter Short By*/}
              <div className="right-section-panel site-bg-gray">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
