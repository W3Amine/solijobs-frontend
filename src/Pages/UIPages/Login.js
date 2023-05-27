import React from "react";
import { Link } from "react-router-dom";

import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";

import googleicon from "../../Assets/images/other/google-icon.png";

export default function Login() {
  return (
    <>
      <SinglePageHeader PageTitle="Login lol xd" />

      <div className="log-reg-form-wrap">
        <div className="log-reg-inner">
          <div className="log-reg-head">
            <span className="log-reg-form-title site-text-primary">Log In</span>
            <p>Login and get access to all the features of SoliJob</p>
          </div>

          <div className="d-flex" id="login">
            <div className="row  col-lg-4 col-md-6 mx-auto">
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input name="username" type="text" required="" className="form-control" placeholder="Usearname*" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input name="email" type="text" className="form-control" required="" placeholder="Password*" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="forgot-wrap">
                  <div className="form-group mb-3">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="Password4" />
                      <label className="form-check-label rem-forgot" htmlFor="Password4">
                        Remember me{" "}
                        <a href="javascript:;" className="site-text-primary">
                          Forgot Password
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <button type="submit" className="site-button">
                    Log in
                  </button>
                </div>
                <div class="mt-3 mb-3">
                  Don't have an account ?
                  <Link to="/register" class="site-text-primary mx-2">
                    register
                  </Link>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group text-center">
                  <span className="center-text-or">Or</span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <button type="submit" className="log_with_facebook">
                    <i className="fab fa-facebook" />
                    Continue with Facebook
                  </button>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <button type="submit" className="log_with_google">
                    <img src={googleicon} alt="" />
                    Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
