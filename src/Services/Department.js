import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { patchRequest, postRequest, getRequest } from "../Services/ApiService";

const DepartmentService = () => {
  const [departments, setDepartments] = useState([]);
  const [input, setInput] = useState({});
  const params = useParams();
  const Navigate = useNavigate();
  const getDepartments = async () => {
    try {
      const res = await getRequest(`getDepartment`);
      setDepartments(res?.result?.message);
    } catch (error) {
      console.error(error);
    }
  };

  const getDepartmentbyId = async () => {
    try {
      const response = await getRequest(`getDepartmentbyId?id=${params.id}`);
      setInput(response?.result?.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = {};
    try {
      if (!input?._id) {
        res = await postRequest(`createDepartment`, input);
      } else {
        res = await patchRequest(`updateDepartment`, {
          ...input,
          _id: input?._id,
        });
      }
      if (!res.success) {
        toast.error(res.result.error);
      } else {
        toast.success("Form Submitted");
        Navigate("/Departmentlist");
      }
    } catch (error) {
      toast.error(
        "something went wrong.Please check console for more detail..."
      );
      console.error(error);
    }
  };

  return {
    departments,
    getDepartments,
    setDepartments,
    getDepartmentbyId,
    input,
    setInput,
    handleChange,
    handleSubmit,
  };
};

export default DepartmentService;
