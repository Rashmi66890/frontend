// import { getDefaultNormalizer } from "@testing-library/react";
// import React, { useEffect, useState } from "react";
// //import { postRequest } from "../Services/ApiService";

// const Signin = () => {
//   const [input, setInput] = useState({});
//   const handleChange = () => {

//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   const getData = async () => {
//     try {
//       const res = await postRequest(``);
//       setInput(res?.result?.message);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <main id="main" className="main">
//       <form className="form-container w-100" onSubmit={handleSubmit}>
//         <div className="pagetitle">
//           <h1>Signin</h1>
//         </div>

//         <section className="section dashboard">
//           <div className="row">
//             <div className="col-lg-6">
//               <form className="d-flex">
//                 <input
//                   type="text"
//                   id="login"
//                   className="fadeIn second form-control mr-2"
//                   name="email"
//                   placeholder="Email"
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="text"
//                   id="password"
//                   className="fadeIn third form-control  mr-2"
//                   name="password"
//                   placeholder="password"
//                   onChange={handleChange}
//                 />
//                 <button className="btn btn-info">Submit</button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </form>
//     </main>
//   );
// };

// export default Signin;
