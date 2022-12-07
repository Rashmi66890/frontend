import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { patchRequest, postRequest, getRequest } from "../Services/ApiService";

const CompanyService = () => {
  const moduleBase = "company/";
  const [input, setInput] = useState({});
  const [data, setData] = useState([]);

  const getCompanies = async () => {
    try {
      const res = await getRequest(`${moduleBase}/get`);
      setData(res?.result?.message);
    } catch (error) {
      console.log(error);
    }
  };

  const getCompanyDetail = async (companyDetail) => {
    try {
      setData(companyDetail);
    } catch (error) {
      console.log(error);
    }
  };

  const approved = async (email, isApprove) => {
    try {
      const res = await patchRequest(`${moduleBase}/approvebyEmail`, {
        email,
        isApprove,
      });
      if (!res.success) {
        toast.error(res.result.error);
      } else {
        toast.success(
          "Approved successfully.Login credentials has been generated and sent to registered Email"
        );
        getCompanies();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [modal, setModal] = useState({
    status: false,
    data: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let _value = value;
    if (_value == "on") {
      _value = !e.target.checked;
    }
    setInput((prev) => {
      return {
        ...prev,
        [name]: _value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = {};
    try {
      if (!data?._id) {
        res = await postRequest(`${moduleBase}/create`, input);
      } else {
        res = await patchRequest(`${moduleBase}/update`, {
          ...input,
          _id: data?._id,
        });
      }
      if (!res.success) {
        toast.error(res.result.error);
      } else {
        toast.success("Form Submitted");
        setModal(false);
      }
    } catch (error) {
      toast.error(
        "something went wrong.Please check console for more detail..."
      );
      console.error(error);
    }
  };

  return {
    handleSubmit,
    handleChange,
    data,
    setData,
    getCompanies,
    input,
    setInput,
    setModal,
    approved,
    modal,
    getCompanyDetail,
  };
};

export default CompanyService;
