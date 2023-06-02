import { useRef } from "react";
import { Link } from "react-router-dom";

import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";

import googleicon from "../../Assets/images/other/google-icon.png";

import { LoginRequest } from "../../API/Composables/LoginRequest";

export default function Login() {
  const EmailInput = useRef();
  const PasswordInput = useRef();
  const { login, ServerErrors } = LoginRequest();

  function LoginHandler(e) {
    e.preventDefault();
    const LoginData = {
      email: EmailInput.current.value,
      password: PasswordInput.current.value,
    };

    console.log(LoginData);
    login(LoginData);
  }

  return (
    <>
      <SinglePageHeader PageTitle="Login lol xd" />

      <div className="log-reg-form-wrap">
        <div className="log-reg-inner">
          <div className="log-reg-head">
            <span className="log-reg-form-title site-text-primary">Log In</span>
            <p>Login and get access to all the features of SoliJob</p>
          </div>

          <form onSubmit={LoginHandler} className="d-flex" id="login">
            <div className="row  col-lg-4 col-md-6 mx-auto">
              {/* display server errors here */}
              {ServerErrors && (
                <div className="alert alert-danger col-md-11 mx-auto" role="alert">
                  {Object.keys(ServerErrors).map((key) => (
                    <p className="my-0" key={key}>
                      {ServerErrors[key][0]}
                    </p>
                  ))}
                </div>
              )}
              {/* server errors end */}
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input ref={EmailInput} name="email" type="text" required="" className="form-control" placeholder="email*" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input ref={PasswordInput} name="password" type="password" className="form-control" required="" placeholder="Password*" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="forgot-wrap">
                  <div className="form-group mb-3">
                    <div className="form-check">
                      <Link to="/register" className="site-text-primary">
                        Forgot Password
                      </Link>
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
          </form>
        </div>
      </div>
    </>
  );
}
