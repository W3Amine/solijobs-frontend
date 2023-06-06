import React, { useEffect, useRef } from "react";
import GetCandidateData from "../../../../API/Composables/Candidate/GetCandidateData";
import SetCandidateData from "../../../../API/Composables/Candidate/SetCandidateData";
import Categories from "../../../../API/Composables/Categories/Categories";
import { useAuthContext } from "../../../../Contexts/AuthContext";
import ErrorMessages from "../../../Alerts/ErrorMessages";
import SuccessMessages from "../../../Alerts/SuccessMessages";

export default function CandidateInfo() {
  const { user } = useAuthContext();
  const { GetTheCandidateData, CandidateData } = GetCandidateData();
  const { SetTheCandidateData, ServerErrors, setServerErrors, ServerSuccessMessage, setServerSuccessMessage } = SetCandidateData();
  const { GetAllCategories, AllCategories } = Categories();
  useEffect(() => {
    GetTheCandidateData();
    GetAllCategories();
  }, []);

  const nameInput = useRef();
  const phoneNumberInput = useRef();
  const emailInput = useRef();

  const aboutInput = useRef();
  const category_idInput = useRef();
  const genderInput = useRef();
  const ageInput = useRef();
  const experienceInput = useRef();
  const qualificationInput = useRef();
  const addressInput = useRef();

  function CandidateProfileUpdateHandler(e) {
    e.preventDefault();
    const CandidateUpdateData = {
      name: nameInput.current.value,
      phoneNumber: phoneNumberInput.current.value,
      email: emailInput.current.value,

      about: aboutInput.current.value,
      category_id: +category_idInput.current.value,
      gender: genderInput.current.value,
      age: ageInput.current.value,
      experience: experienceInput.current.value,
      qualification: qualificationInput.current.value,
      address: addressInput.current.value,
    };

    console.log(CandidateUpdateData);
    setServerErrors(null);
    setServerSuccessMessage(null);
    SetTheCandidateData(CandidateUpdateData);
  }

  if (!CandidateData && !AllCategories) {
    return "loading";
    // return null;
  }

  return (
    <form onSubmit={CandidateProfileUpdateHandler}>
      {/*Basic Information*/}
      <div className="panel panel-default">
        <div className="panel-heading wt-panel-heading p-a20">
          <h4 className="panel-tittle m-a0">Basic Informations</h4>
        </div>
        <div className="panel-body wt-panel-body p-a20 m-b30">
          {/* display server success message here */}
          <SuccessMessages message={ServerSuccessMessage} />
          {/* server server success message end */}
          {/* display server errors here */}
          <ErrorMessages errors={ServerErrors} />
          {/* server errors end */}

          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Your Name</label>
                <div className="ls-inputicon-box">
                  <input defaultValue={user.name} ref={nameInput} className="form-control" type="text" placeholder="Devid Smith" />
                  <i className="fs-input-icon fa fa-user" />
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

            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>Age</label>
                <div className="ls-inputicon-box">
                  <input defaultValue={CandidateData.age} ref={ageInput} className="form-control" name="company_since" type="number" placeholder="35 Years" />
                  <i className="fs-input-icon fa fa-child" />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Qualification</label>
                <div className="ls-inputicon-box">
                  <input defaultValue={CandidateData.qualification} ref={qualificationInput} className="form-control" name="company_since" type="text" placeholder="BTech" />
                  <i className="fs-input-icon fa fa-user-graduate" />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>Experience</label>
                <div className="ls-inputicon-box">
                  <input defaultValue={CandidateData.experience} ref={experienceInput} className="form-control" name="company_since" type="text" placeholder="05 Years" />
                  <i className="fs-input-icon fa fa-user-edit" />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group mb-3">
                <label>Job Category</label>
                <select defaultValue={CandidateData.category_id} ref={category_idInput} className="w-100">
                  {AllCategories &&
                    AllCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="form-group mb-3">
                <label>Gender</label>
                <select defaultValue={CandidateData.gender} ref={genderInput} className="w-100">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="form-group city-outer-bx has-feedback">
                <label>Full Address</label>
                <div className="ls-inputicon-box">
                  <input defaultValue={CandidateData.address} ref={addressInput} className="form-control" name="company_since" type="text" placeholder="1363-1385 Sunset Blvd Angeles, CA 90026 ,USA" />
                  <i className="fs-input-icon fas fa-map-marker-alt" />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label>About</label>
                <textarea defaultValue={CandidateData.about} ref={aboutInput} className="form-control" rows={3} />
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
