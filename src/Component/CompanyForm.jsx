import React, { useEffect, useState } from "react";
import { MDBBtn, MDBModalHeader } from "mdb-react-ui-kit";
import "react-toastify/dist/ReactToastify.css";
import CompanyService from "../Services/Company";

function CompanyForm({ companyDetail, setModal }) {
  const { handleSubmit, handleChange, getCompanyDetail } = CompanyService();

  const close = () => {
    setModal(false);
  };

  useEffect(() => {
    getCompanyDetail(companyDetail);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        background: "lightblue",
      }}
    >
      <div
        className="container"
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="form-popup" id="myForm" style={{ padding: "25px" }}>
          <MDBModalHeader>
            <h4
              style={{
                color: "blue",
                fontWeight: "bold",
              }}
            >
              Company:
            </h4>

            <MDBBtn
              className="btn-close"
              style={{
                color: "blue",
                fontWeight: "bold",
              }}
              onClick={close}
            ></MDBBtn>
          </MDBModalHeader>
          <form className="form-container w-100" onSubmit={handleSubmit}>
            <div className="row">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="signup_label" for="companyName">
                      Company:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyName"
                      name="companyName"
                      defaultValue={companyDetail?.companyName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="signup_label" for="ownerName">
                      Owner:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ownerName"
                      name="ownerName"
                      required="true"
                      textTransform="capitalize"
                      defaultValue={companyDetail?.ownerName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="signup_label" for="brandName">
                      Brand:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="brandName"
                      name="brandName"
                      defaultValue={companyDetail?.brandName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="signup_label" for="email">
                      Email:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      defaultValue={companyDetail?.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="signup_label" for="email">
                      Phone:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      defaultValue={companyDetail?.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="signup_label" for="address">
                      Address:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      defaultValue={companyDetail?.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="signup_label" for="city">
                      City:
                    </label>
                    <select
                      className="form-control"
                      id="city"
                      name="city"
                      defaultValue={companyDetail?.city}
                      onChange={handleChange}
                    >
                      <option value="N/A">N/A</option>
                      <option value="Lucknow">Lucknow</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Chandigarh">Chandigarh</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="signup_label" htmlFor="state">
                      State:
                    </label>
                    <select
                      className="form-control"
                      id="state"
                      name="state"
                      defaultValue={companyDetail?.state}
                      onChange={handleChange}
                    >
                      <option value="N/A">N/A</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="Punjab">Punjab</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="signup_label" for="country">
                      Country:
                    </label>
                    <select
                      className="form-control"
                      id="country"
                      name="country"
                      defaultValue={companyDetail?.country}
                      onChange={handleChange}
                    >
                      <option value="N/A">N/A</option>
                      <option value="India">India</option>
                      <option value="Brazil">Brazil</option>
                      <option value="France">France</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="signup_label" for="pinCode">
                      Pin Code:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pinCode"
                      name="pinCode"
                      defaultValue={companyDetail?.pinCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="signup_label" for="logoUrl">
                      Logo:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="logoUrl"
                      name="logoUrl"
                      defaultValue={companyDetail?.logoUrl}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="form-group">
                    <label>isActive:</label>
                    <input
                      type="checkbox"
                      className="form-check-input d-block"
                      name="isActive"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3">
                <button
                  type="submit"
                  className="btn btn-primary  col-lg-12 col-md-12 mt-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyForm;
