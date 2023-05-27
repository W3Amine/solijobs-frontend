import React from "react";

export default function CandidateInfo() {
  return (
    <form>
      {/*Basic Information*/}
      <div className="panel panel-default">
        <div className="panel-heading wt-panel-heading p-a20">
          <h4 className="panel-tittle m-a0">Basic Informations</h4>
        </div>
        <div className="panel-body wt-panel-body p-a20 m-b30">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Your Name</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_name" type="text" placeholder="Devid Smith" />
                  <i className="fs-input-icon fa fa-user" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Phone</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_phone" type="text" placeholder="(251) 1234-456-7890" />
                  <i className="fs-input-icon fa fa-phone-alt" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Email Address</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_Email" type="email" placeholder="Devid@example.com" />
                  <i className="fs-input-icon fas fa-at" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Website</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_website" type="text" placeholder="https://devsmith.net/" />
                  <i className="fs-input-icon fa fa-globe-americas" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Qualification</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_since" type="text" placeholder="BTech" />
                  <i className="fs-input-icon fa fa-user-graduate" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Language</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_since" type="text" placeholder="e.x English, Spanish" />
                  <i className="fs-input-icon fa fa-language" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>Job Category</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_since" type="text" placeholder="IT & Software" />
                  <i className="fs-input-icon fa fa-border-all" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>Experience</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_since" type="text" placeholder="05 Years" />
                  <i className="fs-input-icon fa fa-user-edit" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>Current Salary</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_since" type="text" placeholder="65K" />
                  <i className="fs-input-icon fa fa-dollar-sign" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>Expected Salary</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_since" type="text" placeholder="75K" />
                  <i className="fs-input-icon fa fa-dollar-sign" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>Age</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_since" type="text" placeholder="35 Years" />
                  <i className="fs-input-icon fa fa-child" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>Country</label>
                <div className="ls-inputicon-box">
                  <input className="form-control" name="company_since" type="text" placeholder="USA" />
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
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={"Greetings! when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."}
                />
              </div>
            </div>
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
      {/*Social Network*/}
      <div className="panel panel-default">
        <div className="panel-heading wt-panel-heading p-a20">
          <h4 className="panel-tittle m-a0">Social Network</h4>
        </div>
        <div className="panel-body wt-panel-body p-a20 m-b30">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Facebook</label>
                <div className="ls-inputicon-box">
                  <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.facebook.com/" />
                  <i className="fs-input-icon fab fa-facebook-f" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Twitter</label>
                <div className="ls-inputicon-box">
                  <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://twitter.com/" />
                  <i className="fs-input-icon fab fa-twitter" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
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
            </div>
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
