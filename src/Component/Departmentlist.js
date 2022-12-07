import React, { useEffect, useState } from "react";
import DepartmentForm from "./DepartmentForm";
import { MDBModalHeader } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import departmentService from "../Services/Department";

const Departmentlist = () => {
  const { departments, getDepartments, setDepartments } = departmentService();

  useEffect(() => {
    getDepartments();
  }, []);

  const [modal, setModal] = useState({
    status: false,
    data: {},
  });
  return (
    <div>
      <main id="main" className="main">
        <div className="form-popup" id="myForm" style={{ padding: "25px" }}>
          {modal.status && (
            <DepartmentForm
              data={modal.data}
              setModal={setModal}
              setData={setDepartments}
            />
          )}
          <MDBModalHeader>
            <h4
              style={{
                color: "blue",
                fontWeight: "bold",
              }}
            >
              DepartmentInfo:
            </h4>
            <NavLink to="/DepartmentForm/0" className="btn btn-primary">
              NEW
            </NavLink>
          </MDBModalHeader>
          <section className="section dashboard">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>SHORT NAME</th>
                        <th>DESCRIPTION</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departments.map((d, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{d.name}</td>
                          <td>{d.shortName}</td>
                          <td>{d.description} </td>

                          <td>
                            <div className="row">
                              <div>
                                <NavLink
                                  to={{
                                    pathname: "/DepartmentForm/" + d._id,
                                  }}
                                  className="btn btn-warning"
                                >
                                  Edit
                                </NavLink>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Departmentlist;
