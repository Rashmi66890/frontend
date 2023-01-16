import "./App.css";
//import "./Component/Login.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Sidebar from "./Component/Sidebar";
import Companylist from "./Component/Companylist";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import CompanyForm from "./Component/CompanyForm";
import Departmentlist from "./Component/Departmentlist";
import DepartmentForm from "./Component/DepartmentForm";
import ProfilePic from "./Component/ProfilePic";
import Dashboard from "./Component/Dashboard";
import { ToastContainer } from "react-toastify";
import Login from "./Component/Login";
import { DATACONSTANT } from "./Services/Dataconstant";
import { getCookie } from "./Services/Cookies";
import React, { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [page, setPage] = useState(true);
  let x = getCookie(DATACONSTANT.COOKIE_NAME);
  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      alert("hello");
    });

    if (!getCookie(DATACONSTANT.COOKIE_NAME)) {
      setPage(false);
      return navigate("/");
    } else {
      setPage(true);
      return navigate("/");
    }
  }, [page, x]);

  return (
    <div>
      <ToastContainer />
      {page ? (
        <>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/Navbar" element={<Navbar />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/footer" element={<Footer />} />
            <Route exact path="/companylist" element={<Companylist />} />
            <Route exact path="/CompanyForm" element={<CompanyForm />} />
            <Route exact path="/ProfilePic" element={<ProfilePic />} />
            <Route
              exact
              path="/DepartmentForm/:id"
              element={<DepartmentForm />}
            />
            <Route exact path="/Departmentlist" element={<Departmentlist />} />
            <Route exact path="/Login" element={<Login />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
