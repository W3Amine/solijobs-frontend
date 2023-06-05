import React, { useEffect, useRef } from "react";
import Categories from "../../../../API/Composables/Categories/Categories";
import CreateJob from "../../../../API/Jobs/CreateJob";
import ErrorMessages from "../../../Alerts/ErrorMessages";
import SuccessMessages from "../../../Alerts/SuccessMessages";

export default function PostJobs() {
  const { GetAllCategories, AllCategories } = Categories();
  const { CreateTheJob, ServerErrors, setServerErrors, ServerSuccessMessage, setServerSuccessMessage } = CreateJob();
  useEffect(() => {
    GetAllCategories();
  }, []);

  const category_id_Input = useRef();
  const location_id_Input = useRef();
  const titleInput = useRef();
  const descriptionInput = useRef();
  const salaryInput = useRef();
  const typeInput = useRef();
  const genderInput = useRef();
  const experienceInput = useRef();
  const qualificationInput = useRef();
  const addressInput = useRef();

  function JobCreateHandler(e) {
    e.preventDefault();
    const JobData = {
      title: titleInput.current.value,
      category_id: category_id_Input.current.value,
      // location_id: location_id_Input.current.value,
      location_id: 5,
      description: descriptionInput.current.value,
      salary: +salaryInput.current.value,
      type: typeInput.current.value,
      gender: genderInput.current.value,
      experience: experienceInput.current.value,
      qualification: qualificationInput.current.value,
      address: addressInput.current.value,
    };

    console.log(JobData);
    // console.log(e.target);
    setServerErrors(null);
    setServerSuccessMessage(null);
    CreateTheJob(JobData);
  }

  if (!AllCategories) {
    return "loading";
    // return null;
  }

  return (
    <form onSubmit={JobCreateHandler}>
      {/*Basic Information*/}
      <div className="panel panel-default">
        <div className="panel-heading wt-panel-heading p-a20">
          <h4 className="panel-tittle m-a0">
            <i className="fa fa-suitcase" />
            Job Details
          </h4>
        </div>
        <div className="panel-body wt-panel-body p-a20 m-b30">
          {/* display server success message here */}
          <SuccessMessages message={ServerSuccessMessage} />
          {/* server server success message end */}
          {/* display server errors here */}
          <ErrorMessages errors={ServerErrors} />
          {/* server errors end */}

          <div className="row">
            {/*Job title*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Job Title</label>
                <div className="ls-inputicon-box">
                  <input ref={titleInput} className="form-control" type="text" placeholder="Senior Full stack developer" />
                  <i className="fs-input-icon fa fa-address-card" />
                </div>
              </div>
            </div>
            {/*Job Category*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group mb-3">
                <label>Job Category</label>
                <select ref={category_id_Input} className="w-100 py-3">
                  <option className="bs-title-option" value="">
                    Select Category
                  </option>
                  {AllCategories &&
                    AllCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            {/*Job Type*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group mb-3">
                <label>Job Type</label>
                <select ref={typeInput} className="w-100 py-3">
                  <option className="bs-title-option" value="">
                    Select Type
                  </option>
                  <option value="Full Time">Full Time</option>
                  <option value="Freelance"> Freelance</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
            </div>
            {/*Offered Salary*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Offered Salary</label>
                <div className="ls-inputicon-box">
                  <input ref={salaryInput} className="form-control" type="number" placeholder="999$" />
                  <i className="fs-input-icon fa fa-dollar-sign" />
                </div>
              </div>
            </div>
            {/*Experience*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Experience</label>
                <div className="ls-inputicon-box">
                  <input ref={experienceInput} className="form-control" type="text" placeholder="E.g. Minimum 3 years" />
                  <i className="fs-input-icon fa fa-user-edit" />
                </div>
              </div>
            </div>
            {/*Qualification*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Qualification</label>
                <div className="ls-inputicon-box">
                  <input ref={qualificationInput} className="form-control" type="text" placeholder="Qualification Title" />
                  <i className="fs-input-icon fa fa-user-graduate" />
                </div>
              </div>
            </div>
            {/*Gender*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group mb-3">
                <label>Gender</label>
                <select ref={genderInput} className="w-100 py-3">
                  <option className="bs-title-option" value="">
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Both">Both</option>
                </select>
              </div>
            </div>
            {/*Country*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group mb-3">
                <label>Job Country</label>
                <select ref={location_id_Input} className="w-100 py-3">
                  <option className="bs-title-option" value="">
                    Select Country
                  </option>
                  {AllCategories &&
                    AllCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            {/*City*/}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="form-group mb-3">
                <label>Job City</label>
                <select ref={location_id_Input} className="w-100 py-3">
                  <option className="bs-title-option" value="">
                    Select City
                  </option>
                  {AllCategories &&
                    AllCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/*Complete Address*/}
            <div className="col-xl-12 col-lg-6 col-md-12">
              <div className="form-group">
                <label>Complete Address</label>
                <div className="ls-inputicon-box">
                  <input ref={addressInput} className="form-control" type="text" placeholder="1363-1385 Sunset Blvd Los Angeles, CA 90026, USA" />
                  <i className="fs-input-icon fa fa-home" />
                </div>
              </div>
            </div>
            {/*Description*/}
            <div className="col-md-12">
              <div className="form-group">
                <label>Description</label>
                <textarea ref={descriptionInput} className="form-control" rows={6} placeholder="Greetings! We are Galaxy Software Development Company. We hope you enjoy our services and quality." />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="text-left">
                <button type="submit" className="site-button m-r5">
                  Publish Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
