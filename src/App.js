import "./App.css";

// import { lazy } from "react";
// const Home = lazy(() => import("./Pages/UIPages/Home"));

// ###############################################################
// ########  import the authContext provider AuthContextProvider  #########
import { AuthContextProvider } from "./Contexts/AuthContext";
// ###############################################################
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetAuthUserData from "./API/GetAuthUserData";
import AuthRolesRouteGate from "./AuthGates/RoutingGates/AuthRolesRouteGate";
import AuthRouteGate from "./AuthGates/RoutingGates/AuthRouteGate";
import GuestRouteGate from "./AuthGates/RoutingGates/GuestRouteGate";

//  START # regular users Pages 'candidates' / 'employers' / 'managers'
import UIIndex from "./Pages/UIPages/UIIndex";
import Home from "./Pages/UIPages/Home";

import Contact from "./Pages/UIPages/Contact";
import Jobs from "./Pages/UIPages/Jobs";
import Categories from "./Pages/UIPages/Categories";
import Blog from "./Pages/UIPages/Blog";
import BlogSingle from "./Pages/UIPages/BlogSingle";
import JobSingle from "./Pages/UIPages/JobSingle";
import Login from "./Pages/UIPages/Login";
import Register from "./Pages/UIPages/Register";
import CandidateProfile from "./Pages/UIPages/Profiles/CandidateProfile";
import EmployerProfile from "./Pages/UIPages/Profiles/EmployerProfile";
import ManagerProfile from "./Pages/UIPages/Profiles/ManagerProfile";
import CandidateDetail from "./Pages/UIPages/Profiles/CandidateDetail";
import EmployerDetail from "./Pages/UIPages/Profiles/EmployerDetail";
import NotFound from "./Pages/UIPages/NotFound";
// profile components
import CandidateInfo from "./Components/UIComponents/Profiles/ContentComponents/CandidateInfo";
import AppliedJobs from "./Components/UIComponents/Profiles/ContentComponents/AppliedJobs";
import SavedJobs from "./Components/UIComponents/Profiles/ContentComponents/SavedJobs";
import CVManager from "./Components/UIComponents/Profiles/ContentComponents/CVManager";
import ChangePassword from "./Components/UIComponents/Profiles/ContentComponents/ChangePassword";
import Employerinfo from "./Components/UIComponents/Profiles/ContentComponents/Employerinfo";
import ManageJobs from "./Components/UIComponents/Profiles/ContentComponents/ManageJobs";
import PostJobs from "./Components/UIComponents/Profiles/ContentComponents/PostJobs";
import VerifyJobs from "./Components/UIComponents/Profiles/ContentComponents/VerifyJobs";
// END # regular users Pages 'candidates' / 'employers' / 'managers'

//  START # ADMIN  Pages for dashborad
import DashBoard from "./Pages/DashBoardPages/DashBoard";
import Users from "./Pages/DashBoardPages/Users";
import NotFoundDashboard from "./Pages/DashBoardPages/NotFoundDashboard";
//  END #  ADMIN  Pages for dashborad

function App() {
  return (
    <>
      <Router>
        {/* auth context provider start */}
        <AuthContextProvider>
          <GetAuthUserData />
          <Routes>
            {/* ############################################################################################## */}
            {/* START # regular users User interfaces (UI) Routes 'candidates' / 'employers' / 'managers' */}
            {/* ############################################################################################## */}

            <Route path="/" element={<UIIndex />}>
              <Route index element={<Home />} />
              <Route path="jobs">
                <Route index element={<Jobs />} />
                <Route path=":SingleJobId" element={<JobSingle />} />
              </Route>
              <Route path="categories" element={<Categories />} />
              <Route path="blog">
                <Route index element={<Blog />} />
                <Route path=":SingleBlogSlug" element={<BlogSingle />} />
              </Route>
              <Route path="contact" element={<Contact />} />
              <Route path="CandidateDetail" element={<CandidateDetail />} />
              <Route path="EmployerDetail" element={<EmployerDetail />} />

              {/* ====================================================================== */}
              {/* ============================= START Guest routes ==================== */}
              {/* ====================================================================== */}

              <Route element={<GuestRouteGate />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>
              {/* ====================================================================== */}
              {/* ======================== END  Guest routes =========================== */}
              {/* ====================================================================== */}

              {/* ====================================================================== */}
              {/* =================== START Auth users Routes ========================== */}
              {/* ====================================================================== */}

              <Route element={<AuthRouteGate />}>
                {/* START # Candidate Profile Route /profile with condition */}
                <Route element={<AuthRolesRouteGate Role="candidate" />}>
                  <Route path="profile" element={<CandidateProfile />}>
                    <Route index element={<CandidateInfo />} />
                    <Route path="CandidateInfo" element={<CandidateInfo />} />
                    <Route path="AppliedJobs" element={<AppliedJobs />} />
                    <Route path="SavedJobs" element={<SavedJobs />} />
                    <Route path="CVManager" element={<CVManager />} />
                    <Route path="ChangePassword" element={<ChangePassword />} />
                  </Route>
                </Route>
                {/* END # Candidate Profile Route */}
                {/* START # Employer Profile Route /profile with condition */}
                <Route element={<AuthRolesRouteGate Role="employer" />}>
                  <Route path="EmployerProfile" element={<EmployerProfile />}>
                    <Route index element={<Employerinfo />} />
                    <Route path="Employerinfo" element={<Employerinfo />} />
                    <Route path="ManageJobs" element={<ManageJobs />} />
                    <Route path="PostJobs" element={<PostJobs />} />
                    <Route path="ChangePassword" element={<ChangePassword />} />
                  </Route>
                </Route>
                {/* END # Employer Profile Route */}
                {/* START # Manager Profile Route /profile with condition */}
                <Route element={<AuthRolesRouteGate Role="manager" />}>
                  <Route path="ManagerProfile" element={<ManagerProfile />}>
                    <Route index element={<VerifyJobs />} />
                    <Route path="verifyJobs" element={<VerifyJobs />} />
                  </Route>
                </Route>
                {/* END # Manager Profile Route */}
              </Route>
              {/* ====================================================================== */}
              {/* =========================== END  Auth users Routes =================== */}
              {/* ====================================================================== */}

              <Route path="*" element={<NotFound />} />
            </Route>
            {/* ############################################################################################## */}
            {/* END # regular users User interfaces (UI) Routes 'candidates' / 'employers' / 'managers' */}
            {/* ############################################################################################## */}

            {/* ############################################################################################## */}
            {/* ########################## START # ADMIN Routes for dashborad ################################ */}
            {/* ############################################################################################## */}

            <Route element={<AuthRolesRouteGate Role="admin" NavigateTo="/NotFound" />}>
              <Route path="dashboard" element={<DashBoard />}>
                <Route path="/dashboard" element={<h2>Parent Content</h2>} />
                <Route path="users" element={<Users />} />
                <Route path="*" element={<NotFoundDashboard />} />
              </Route>
            </Route>
            {/* ############################################################################################## */}
            {/* ############################### END  ADMIN Routes for dashborad ############################## */}
            {/* ############################################################################################## */}
          </Routes>
          {/* auth context end  */}
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
