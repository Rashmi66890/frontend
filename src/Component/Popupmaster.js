import React, { useState, useEffect } from "react";
import DepartmentService from "../Services/Department";
import "./popup.css";
const Popupmaster = ({ setPopup }) => {
  const { getDepartmentbyId, input, handleChange, handleSubmit } =
    DepartmentService();

  useEffect(() => {
    getDepartmentbyId();
  }, []);
  return (
    <main id="main" className="main">
      <div className="modal show" style={{ display: "block" }} id="myModal">
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h3
                className="modal-title"
                style={{
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                Department
              </h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setPopup(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="credit rounded mt-2 justify-content-between align-items-center">
                  <div className="mt-3">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label for="exampleInputPassword1">NAME:</label>
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
                      </div>{" "}
                      <div className="form-group">
                        <label for="exampleInputPassword1">SHORTNAME: </label>
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
                      <div className="form-group">
                        <label for="exampleInputPassword1">DESCRIPTION:</label>
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
                      <button
                        type="submit"
                        className="btn btn-primary"
                        // onClick={() => setPopup(false)}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary ml-2"
                        onClick={() => setPopup(false)}
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Popupmaster;
