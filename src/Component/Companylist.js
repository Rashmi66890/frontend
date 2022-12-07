import React, { useEffect, useState } from "react";
import CompanyForm from "./CompanyForm";
import { MDBModalHeader } from "mdb-react-ui-kit";
import "react-toastify/dist/ReactToastify.css";
import CompanyService from "../Services/Company";

const Companylist = () => {
  const { getCompanies, data, setData, setModal, approved, modal } =
    CompanyService();

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <>
      <main id="main" className="main">
        {modal.status && (
          <CompanyForm
            companyDetail={modal.data}
            setModal={setModal}
            setData={setData}
          />
        )}
        <MDBModalHeader>
          <h4
            style={{
              color: "blue",
              fontWeight: "bold",
            }}
          >
            CompanyInfo:
          </h4>
          <button onClick={() => setModal({ status: true })}> ADD</button>
        </MDBModalHeader>
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Owner</th>
                      <th>Company</th>
                      <th>Brand</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Logo</th>
                      <th>ActiveAt</th>
                      <th>ExpiredAt</th>
                      <th>isActive</th>
                      <th>ApiKey</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((d, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>
                          {d.ownerName}
                          <small className="d-block">{d.referenceId}</small>
                        </td>
                        <td>{d.companyName}</td>
                        <td>{d.brandName}</td>
                        <td>{d.email}</td>
                        <td>{d.phone}</td>
                        <td>
                          {d.address}
                          <small className="d-block">{d.city}</small>
                          <small className="d-block">{d.state}</small>
                          <small className="d-block">{d.country}</small>
                          <small className="d-block">{d.pinCode}</small>
                        </td>
                        <td>{d.logoUrl}</td>
                        <td>{d.planActiveAt}</td>
                        <td>{d.planExpiredAt}</td>
                        <td>{d.isActive}</td>
                        <td>{d.apiKey}</td>

                        <td>
                          <button
                            type="button"
                            onClick={() => setModal({ status: true, data: d })}
                            className="btn btn-primary"
                          >
                            Edit
                          </button>

                          {!d.isApprove ? (
                            <button
                              type="button"
                              className="btn btn-info m-1"
                              onClick={() => approved(d.email, true)}
                            >
                              APPROVE
                            </button>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Companylist;
