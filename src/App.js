import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Sidebar from "./Component/Sidebar";
import Companylist from "./Component/Companylist";
import { Routes, Route } from "react-router-dom";
import CompanyForm from "./Component/CompanyForm";
import Departmentlist from "./Component/Departmentlist";
import DepartmentForm from "./Component/DepartmentForm";
import Dashboard from "./Component/Dashboard";
import { ToastContainer } from "react-toastify";
import Signin from "./Component/Signin";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route exact path="/sidebar" element={<Sidebar />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/footer" element={<Footer />} />
        <Route exact path="/companylist" element={<Companylist />} />
        <Route exact path="/CompanyForm" element={<CompanyForm />} />
        <Route exact path="/DepartmentForm/:id" element={<DepartmentForm />} />
        <Route exact path="/Departmentlist" element={<Departmentlist />} />
        <Route exact path="/Signin" element={<Signin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
