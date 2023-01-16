import React, { useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import "react-toastify/dist/ReactToastify.css";
import CompanyService from "../Services/Company";
import departmentService from "../Services/Department";

function CompanyForm({ companyDetail, setModal }) {
  const {
    handleSubmitForm,
    handleSubmit,
    handleChange,
    error,
    inputRef,
    handleChecked,
    getCompanyDetail,
    handleImage,
  } = CompanyService();
  const { departments, getDepartments, setDepartments } = departmentService();
  const close = () => {
    setModal(false);
  };

  useEffect(() => {
    console.log("companyDetail", companyDetail);
    getCompanyDetail(companyDetail);
    getDepartments();
  }, []);

  return (
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block", background: " #0000009e" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
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
          </div>
          <div className="modal-body">
            <div className="form-popup" id="myForm">
              <form className="form-container w-100">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="signup_label" htmlFor="companyName">
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
                      <label className="signup_label" htmlFor="ownerName">
                        Owner:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ownerName"
                        name="ownerName"
                        required="true"
                        texttransform="capitalize"
                        defaultValue={companyDetail?.ownerName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="signup_label" htmlFor="brandName">
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
                      <label className="signup_label" htmlFor="email">
                        Email:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        defaultValue={companyDetail?.email}
                        onChange={(e) => handleChange(e, true)}
                      />
                      <label>{error}</label>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="signup_label" htmlFor="email">
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
                      <label className="signup_label" htmlFor="address">
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

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="signup_label" htmlFor="city">
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

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="signup_label" htmlFor="country">
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
                      <label className="signup_label" htmlFor="pinCode">
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

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <img src={companyDetail?.logo} />
                    </div>
                    <div className="form-group">
                      <label className="signup_label" htmlFor="logo">
                        Logo:
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="logo"
                        name="logo"
                        defaultValue={""}
                        onChange={handleImage}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>&nbsp;</label>
                      <div className="input-group">
                        <div className="input-group-text">
                          <input
                            type="checkbox"
                            name="isActive"
                            id="isActive"
                            className="mr-2"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="input-group-append">
                          <label className="form-control" htmlFor="isActive">
                            isActive
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <label>Departments:</label>
                    {departments.map((d, i) => (
                      <div className="form-group">
                        <label>&nbsp;</label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <input
                              type="checkbox"
                              name="departmentName"
                              id={"departmentName" + i}
                              className="mr-2"
                              value={d.name}
                              defaultValue={companyDetail?.departmentName}
                              onChange={handleChecked}
                            />
                          </div>
                          <div className="input-group-append">
                            <label
                              className="form-control"
                              htmlFor={"departmentName" + i}
                            >
                              {d.name}
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmitForm}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger ml-2"
              data-dismiss="modal"
              onClick={close}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyForm;
