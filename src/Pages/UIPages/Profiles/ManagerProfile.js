import React from "react";
import SinglePageHeader from "../../../Components/UIComponents/SinglePageHeader";
import ManagerProfileSideBar from "../../../Components/UIComponents/Profiles/ManagerProfileSideBar";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../../../Contexts/AuthContext";

export default function ManagerProfile() {
  const { user } = useAuthContext();

  return (
    <>
      <SinglePageHeader PageTitle={"Welcome , " + user.name} />
      <div className="section-full p-t120 p-b90 site-bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">
              <ManagerProfileSideBar />
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
