import React, { useEffect, useRef } from "react";
import GetEmployerData from "../../../../API/Composables/GetEmployerData";
import SetEmployerData from "../../../../API/Composables/SetEmployerData";
import { useAuthContext } from "../../../../Contexts/AuthContext";

export default function Employerinfo() {
  const { user } = useAuthContext();
  const { GetTheEmployerData, EmployerData } = GetEmployerData();
  // GetTheEmployerData();
  const { SetTheEmployerData, ServerErrors, setServerErrors, ServerSuccessMessage, setServerSuccessMessage } = SetEmployerData();
  useEffect(() => {
    GetTheEmployerData();
    console.log("33333333333333333333333333333333333333333333333333333");
    console.log(EmployerData);
    console.log("33333333333333333333333333333333333333333333333333333");
  }, []);

  const nameInput = useRef();
  const phoneNumberInput = useRef();
  const emailInput = useRef();
  const websiteInput = useRef();
  const aboutInput = useRef();
  const facebookInput = useRef();
  const twitterInput = useRef();

  function EmployerProfileUpdateHandler(e) {
    e.preventDefault();
    const EmployerUpdateData = {
      name: nameInput.current.value,
      phoneNumber: phoneNumberInput.current.value,
      email: emailInput.current.value,
      website: websiteInput.current.value,
      about: aboutInput.current.value,
      facebook: facebookInput.current.value,
      twitter: twitterInput.current.value,
    };

    console.log(EmployerUpdateData);
    setServerErrors(null);
    setServerSuccessMessage(null);
    SetTheEmployerData(EmployerUpdateData);
  }

  if (!EmployerData) {
    return "loading";
    // return null;
  }

  return (
    <form onSubmit={EmployerProfileUpdateHandler}>
      {/*Basic Information*/}
      <div className="panel panel-default">
        <div className="panel-heading wt-panel-heading p-a20">
          <h4 className="panel-tittle m-a0">Company Profile</h4>
        </div>
        <div className="panel-body wt-panel-body p-a20 m-b30">
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
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Company Name</label>
                <div className="ls-inputicon-box">
                  <input defaultValue={user.name} ref={nameInput} type="text" className="form-control" placeholder="Devid Smith" />
                  <i className="fs-input-icon fa fa-building" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Phone</label>
                <div className="ls-inputicon-box">
                  <input defaultValue={user.phoneNumber} ref={phoneNumberInput} className="form-control" type="tel" placeholder="(251) 1234-456-7890" />
                  <i className="fs-input-icon fa fa-phone-alt" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Email Address</label>
                <div className="ls-inputicon-box">
                  <input defaultValue={user.email} ref={emailInput} className="form-control" type="email" placeholder="Devid@example.com" />
                  <i className="fs-input-icon fas fa-at" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Website</label>
                <div className="ls-inputicon-box">
                  <input defaultValue={EmployerData.website} ref={websiteInput} className="form-control" type="url" placeholder="https://SoliJobs.com/" />
                  <i className="fs-input-icon fa fa-globe-americas" />
                </div>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>Country</label>
                <div className="ls-inputicon-box">
                  <input className="form-control"  type="text" placeholder="USA" />
                  <i className="fs-input-icon fa fa-globe-americas" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>City</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_since" type="text" placeholder="Texas" />
                  <i className="fs-input-icon fa fa-globe-americas" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>Postcode</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_since" type="text" placeholder={75462} />
                  <i className="fs-input-icon fas fa-map-pin" />
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>Full Address</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_since" type="text" placeholder="1363-1385 Sunset Blvd Angeles, CA 90026 ,USA" />
                  <i className="fs-input-icon fas fa-map-marker-alt" />
                </div>
              </div>
            </div> */}
            <div className="col-xl-12 col-lg-12 col-md-12"></div>
            <div className="col-md-12">
              <div className="form-group">
                <label>About</label>
                <textarea defaultValue={EmployerData.about} ref={aboutInput} className="form-control" rows={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Social Network*/}
      <div className="panel panel-default">
        <div className="panel-heading wt-panel-heading p-a20">
          <h4 className="panel-tittle m-a0">Social Network</h4>
        </div>
        <div className="panel-body wt-panel-body p-a20">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Facebook</label>
                <div className="ls-inputicon-box">
                  <input defaultValue={EmployerData.facebook} ref={facebookInput} className="form-control wt-form-control" type="url" placeholder="https://www.facebook.com/" />
                  <i className="fs-input-icon fab fa-facebook-f" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Twitter</label>
                <div className="ls-inputicon-box">
                  <input defaultValue={EmployerData.twitter} ref={twitterInput} className="form-control wt-form-control" type="url" placeholder="https://twitter.com/" />
                  <i className="fs-input-icon fab fa-twitter" />
                </div>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>linkedin</label>
                <div className="ls-inputicon-box">
                  <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://in.linkedin.com/" />
                  <i className="fs-input-icon fab fa-linkedin-in" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Whatsapp</label>
                <div className="ls-inputicon-box">
                  <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.whatsapp.com/" />
                  <i className="fs-input-icon fab fa-whatsapp" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Instagram</label>
                <div className="ls-inputicon-box">
                  <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.instagram.com/" />
                  <i className="fs-input-icon fab fa-instagram" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Pinterest</label>
                <div className="ls-inputicon-box">
                  <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://in.pinterest.com/" />
                  <i className="fs-input-icon fab fa-pinterest-p" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Tumblr</label>
                <div className="ls-inputicon-box">
                  <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.tumblr.com/" />
                  <i className="fs-input-icon fab fa-tumblr" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Youtube</label>
                <div className="ls-inputicon-box">
                  <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.youtube.com/" />
                  <i className="fs-input-icon fab fa-youtube" />
                </div>
              </div>
            </div> */}
            <div className="col-lg-12 col-md-12">
              <div className="text-left">
                <button type="submit" className="site-button">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
