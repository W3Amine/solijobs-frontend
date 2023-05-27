import React from "react";
import { Link } from "react-router-dom";

import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";
import googleicon from "../../Assets/images/other/google-icon.png";
export default function Register() {
  return (
    <>
      <SinglePageHeader PageTitle="Register lol xd" />

      <div className="log-reg-form-wrap">
        <div className="log-reg-inner">
          <div className="log-reg-head">
            <span className="log-reg-form-title site-text-primary">Register</span>
            <p>Register and get access to all the features of SoliJob</p>
          </div>

          <div className="d-flex" id="login">
            <div className="row col-lg-4 col-md-6 mx-auto">
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
                <div className="form-group mb-3">
                  <input name="phone" type="text" className="form-control" required="" placeholder="Email*" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input name="phone" type="text" className="form-control" required="" placeholder="Phone*" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="agree1" />
                    <label className="form-check-label" htmlFor="agree1">
                      I agree to the <a href="javascript:;">Terms and conditions</a>
                    </label>
                    <p>
                      Already registered?
                      <Link to="/login" className="backto-login mx-2">
                        Log in here
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <button type="submit" className="site-button">
                  Sign Up
                </button>
              </div>

              <div class="col-md-12 mt-4">
                <div class="form-group text-center">
                  <span class="center-text-or">Or</span>
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
