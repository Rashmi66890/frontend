import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import departmentService from "../Services/Department";

const DepartmentForm = () => {
  const { getDepartmentbyId, input, handleChange, handleSubmit } =
    departmentService();

  useEffect(() => {
    getDepartmentbyId();
  }, []);

  return (
    <main id="main" className="main">
      <div className="form-popup" id="myForm" style={{ padding: "25px" }}>
        <h4
          style={{
            color: "blue",
            fontWeight: "bold",
          }}
        >
          Department:
        </h4>
        <form className="form-container w-100" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <label className="signup_label" for="name">
                NAME:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required="true"
                maxLength={25}
                defaultValue={input?.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6">
              <label className="signup_label" for="shortName">
                SHORTNAME:
              </label>
              <input
                type="text"
                className="form-control"
                id="shortName"
                name="shortName"
                required="true"
                maxLength={10}
                defaultValue={input?.shortName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6">
              <label className="signup_label" for="description">
                DESCRIPTION:
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                required="true"
                maxLength={100}
                defaultValue={input?.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-4"></div>
            <div className="col-lg-1 col-md-1">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="col-lg-1 col-md-1">
              <NavLink to="/Departmentlist" className="btn btn-danger ml-2">
                Cancel
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
export default DepartmentForm;
