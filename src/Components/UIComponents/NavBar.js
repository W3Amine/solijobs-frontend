import React from "react";
import { Link } from "react-router-dom";
import SoliJobLogoblackbg from "../../Assets/images/logos/SoliJobLogoblackbg.png";
import SoliJobLogowhitebg from "../../Assets/images/logos/SoliJobLogowhitebg.png";
import AuthRenderGate from "../../AuthGates/RenderingGates/AuthRenderGate";
import GuestRenderGate from "../../AuthGates/RenderingGates/GuestRenderGate";
import ProfileAvatar from "./Profiles/ProfileAvatar";

export default function NavBar() {
  return (
    <>
      {/* navBar START */}
      <header className="site-header header-style-light mobile-sider-drawer-menu">
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar">
            <div className="container-fluid clearfix">
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <Link to="/">
                    <img src={SoliJobLogoblackbg} alt="" className="default-scroll-show" />
                    <img src={SoliJobLogowhitebg} alt="" className="on-scroll-show" />
                  </Link>
                </div>
              </div>
              {/* NAV Toggle Button */}
              <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar icon-bar-first" />
                <span className="icon-bar icon-bar-two" />
                <span className="icon-bar icon-bar-three" />
              </button>
              {/* MAIN Vav */}
              <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
                <ul className="nav navbar-nav">
                  <li className="">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="jobs">Jobs</Link>
                  </li>
                  <li>
                    <Link to="categories">Categories</Link>
                  </li>
                  <li>
                    <Link to="blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* Header Right Section*/}
              <div className="extra-nav header-2-nav">
                <div className="extra-cell">
                  <div className="header-search">
                    <li>
                      <Link to="jobs" className="header-search-icon">
                        <i className="feather-search" />
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="extra-cell">
                  <div className="header-nav-btn-section">
                    <div className="nav-btn-right">
                      <Link to="login" className="primarybtn">
                        <i className="feather-briefcase" /> Post a job
                      </Link>
                    </div>

                    {/* render only for guests */}
                    <GuestRenderGate>
                      <div className="nav-btn-right">
                        <Link to="register" className="primarybtn">
                          <i className="feather-briefcase" /> register
                        </Link>
                      </div>
                      <div className="nav-btn-right">
                        <Link to="login" className="primarybtn">
                          <i className="feather-briefcase" /> Login
                        </Link>
                      </div>
                    </GuestRenderGate>

                    {/* render only for auth users */}
                    <AuthRenderGate>
                      <ProfileAvatar />
                    </AuthRenderGate>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SITE Search */}
          <div id="search">
            <span className="close" />
            <form role="search" id="searchform" action="https://thewebmax.org/search" method="get" className="radius-xl">
              <input className="form-control" defaultValue="" name="q" type="search" placeholder="Type to search" />
              <span className="input-group-append">
                <button type="button" className="search-btn">
                  <i className="fa fa-paper-plane" />
                </button>
              </span>
            </form>
          </div>
        </div>
      </header>
      {/* navBar END */}
    </>
  );
}
