import React, { useRef } from "react";
import { Link } from "react-router-dom";

import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";
import googleicon from "../../Assets/images/other/google-icon.png";
import { RegisterRequest } from "../../API/Composables/RegisterRequest";

export default function Register() {
  const FullNameInput = useRef();
  const EmailInput = useRef();
  const PasswordInput = useRef();
  const RePasswordInput = useRef();
  const RoleInput = useRef();

  const { register, ServerErrors } = RegisterRequest();

  function RegisterHandler(e) {
    e.preventDefault();

    const RegisterData = {
      name: FullNameInput.current.value,
      email: EmailInput.current.value,
      password: PasswordInput.current.value,
      password_confirmation: RePasswordInput.current.value,
      role: +RoleInput.current.value,
    };

    console.log(RegisterData);
    register(RegisterData);
  }

  return (
    <>
      <SinglePageHeader PageTitle="Register lol xd" />

      <div className="log-reg-form-wrap">
        <div className="log-reg-inner">
          <div className="log-reg-head">
            <span className="log-reg-form-title site-text-primary">Register</span>
            <p>Register and get access to all the features of SoliJob</p>
          </div>

          <form onSubmit={RegisterHandler} className="d-flex" id="register">
            <div className="row col-lg-4 col-md-6 mx-auto">
              {ServerErrors && (
                <div className="alert alert-danger col-md-11 mx-auto" role="alert">
                  {Object.keys(ServerErrors).map((key) => (
                    <p className="my-0" key={key}>
                      {ServerErrors[key][0]}
                    </p>
                  ))}
                </div>
              )}

              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input ref={FullNameInput} type="text" required="" className="form-control" placeholder="FullName or company name*" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input ref={EmailInput} type="email" className="form-control" required="" placeholder="Email*" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input ref={PasswordInput} type="password" className="form-control" required="" placeholder="Password*" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input ref={RePasswordInput} type="password" className="form-control" required="" placeholder="Re-Password*" />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <select ref={RoleInput} className="w-100 py-3">
                    <option value="2">Candidate</option>
                    <option value="3">Employer</option>
                  </select>
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
          </form>
        </div>
      </div>
    </>
  );
}
