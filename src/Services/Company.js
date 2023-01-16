import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  patchRequest,
  postRequest,
  getRequest,
  postReq,
} from "../Services/ApiService";

const CompanyService = () => {
  const navigate = useNavigate();
  const moduleBase = "Company/";
  const [input, setInput] = useState({});
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [departmentInfo, setdepartmentInfo] = useState({ departmentName: [] });
  const [image, setImage] = useState();

  const getCompanies = async () => {
    try {
      const res = await getRequest(`${moduleBase}/get`);
      console.log("getCompanies", res?.result?.message);
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
    console.log("===", email);
    try {
      const res = await patchRequest(`${moduleBase}/approvebyEmail`, {
        email,
        isApprove,
      });
      console.log("res==", res?.result?.message);
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
    data: null,
  });

  const handleChange = (e, isEmail) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { name, value } = e.target;

    if (isEmail) {
      if (!re.test(e.target.value)) {
        setError("Enter valid Email");
      } else {
        setError("");
      }
    }
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

  const handleChecked = async (e) => {
    const { value, checked } = e.target;
    const { departmentName } = departmentInfo;
    if (checked) {
      setdepartmentInfo({
        departmentName: [...departmentName, value],
      });
    }
  };
  const handleImage = async (e) => {
    setImage({
      value: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = {};
    try {
      if (!data?._id) {
        let __d = { ...input, ...departmentInfo };
        res = await postRequest(`${moduleBase}/create`, __d);
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

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    let res = {};

    let __d = { ...input, ...departmentInfo };
    let formData = new FormData();
    try {
      formData.append("logo", image.value);
      for (let key in __d) {
        formData.append(key, __d[key]);
      }
      if (!data?._id) {
        res = await postReq(
          `${moduleBase}/create`,
          formData,
          "multipart/form-data; boundary=something"
        );
      } else {
        formData.append("_id", data?._id);
        res = await patchRequest(
          `${moduleBase}/update`,
          formData,
          "multipart/form-data; boundary=something"
        );
      }
      if (!res.success) {
        toast.error(res.result.error);
      } else {
        toast.success("Form Submitted");
        setModal(false);
        return navigate("/companylist", { replace: true });
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
    handleChecked,
    handleImage,
    data,
    setData,
    getCompanies,
    input,
    error,
    setInput,
    setModal,
    approved,
    modal,
    getCompanyDetail,
    handleSubmitForm,
  };
};

export default CompanyService;
