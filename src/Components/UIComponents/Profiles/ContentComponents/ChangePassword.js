import React, { useRef } from "react";
import ChangePasswordRequest from "../../../../API/Composables/ChangePasswordRequest";

export default function ChangePassword() {
  const passwordInput = useRef();
  const new_password_Input = useRef();
  const new_password_confirmation_Input = useRef();

  const { ChangeThePassword, ServerErrors, ServerSuccessMessage } = ChangePasswordRequest();
  function ChangePasswordHandler(e) {
    e.preventDefault();

    const ChangePasswordData = {
      password: passwordInput.current.value,
      new_password: new_password_Input.current.value,
      new_password_confirmation: new_password_confirmation_Input.current.value,
    };

    console.log(ChangePasswordData);
    ChangeThePassword(ChangePasswordData);
  }

  return (
    <div>
      {/*Basic Information*/}
      <div className="panel panel-default">
        <div className="panel-heading wt-panel-heading p-a20">
          <h4 className="panel-tittle m-a0">Change Password</h4>
        </div>

        <form onSubmit={ChangePasswordHandler} className="panel-body wt-panel-body p-a20">
          {/* display server success message here */}
          {ServerSuccessMessage && (
            <div className="alert alert-success col-md-11 mx-auto" role="alert">
              <p className="my-0">{ServerSuccessMessage}</p>
            </div>
          )}
          {/* server server success message end */}
          {/* display server errors here */}
          {ServerErrors && (
            <div className="alert alert-danger col-md-11 mx-auto" role="alert">
              {ServerErrors.map((error) => (
                <p className="my-0" key={error}>
                  {error}
                </p>
              ))}
            </div>
          )}
          {/* server errors end */}

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Old Password</label>
                <div className="ls-inputicon-box">
                  <input ref={passwordInput} className="form-control wt-form-control" type="password" placeholder="" />
                  <i className="fs-input-icon fa fa-asterisk" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>New Password</label>
                <div className="ls-inputicon-box">
                  <input ref={new_password_Input} className="form-control wt-form-control" type="password" placeholder="" />
                  <i className="fs-input-icon fa fa-asterisk" />
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>Confirm New Password</label>
                <div className="ls-inputicon-box">
                  <input ref={new_password_confirmation_Input} className="form-control wt-form-control" name="company_name" type="password" placeholder="" />
                  <i className="fs-input-icon fa fa-asterisk" />
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="text-left">
                <button type="submit" className="site-button">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
