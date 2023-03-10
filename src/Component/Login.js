import React from "react";
import styles from "./Login.module.css";
import { postReq, postRequest } from "../Services/ApiService";
import { toast } from "react-toastify";
import { setCookie } from "../Services/Cookies";
import { DATACONSTANT } from "../Services/Dataconstant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const moduleBase = "auth";
  const navigate = useNavigate();
  const [input, setInput] = useState({});
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
    try {
      const res = await postRequest(`${moduleBase}/signin`, input);

      if (res.success) {
        setCookie(DATACONSTANT.COOKIE_NAME, res.result.token, 30);
        toast.success("Login Successfully");
        return navigate("/Dashboard", { replace: true });
      } else {
        toast.error("Credentials invalid");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 text-center mb-5">
              <h2 class="heading-section"></h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="wrap d-md-flex">
                <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                  <div class="text w-100">
                    <h2>Welcome to login</h2>
                    <p>Don't have an account?</p>
                    <a href="#" class="btn btn-white btn-outline-white">
                      Sign Up
                    </a>
                  </div>
                </div>
                <div class="login-wrap p-4 p-lg-5">
                  <div class="d-flex">
                    <div class="w-100">
                      <h3 class="mb-4">Sign In</h3>
                    </div>
                    <div class="w-100">
                      <p class="social-media d-flex justify-content-end">
                        <a
                          href="#"
                          class="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span class="fa fa-facebook"></span>
                        </a>
                        <a
                          href="#"
                          class="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span class="fa fa-twitter"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <form class="signin-form" onSubmit={handleSubmit}>
                    <div class="form-group mb-3">
                      <label class="label" for="name">
                        Email
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder=" Enter Email"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="form-group mb-3">
                      <label class="label" for="password">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder=" Enter Password"
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        class="form-control btn btn-primary submit px-3"
                      >
                        Sign In
                      </button>
                    </div>
                    <div class="form-group d-md-flex">
                      <div class="w-50 text-left">
                        <label class="checkbox-wrap checkbox-primary mb-0">
                          Remember Me
                          <input type="checkbox" checked />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div class="w-50 text-md-right">
                        <a href="#">Forgot Password</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

/* <html lang="en">
<head>
<title>Login 07</title>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
<link rel="stylesheet" href="css/style.css"/>
<script nonce="a3a01ae1-1317-4df2-bfa2-da17e7c3311b">(function(w,d){!function(eK,eL,eM,eN){eK.zarazData=eK.zarazData||{};eK.zarazData.executed=[];eK.zaraz={deferred:[],listeners:[]};eK.zaraz.q=[];eK.zaraz._f=function(eO){return function(){var eP=Array.prototype.slice.call(arguments);eK.zaraz.q.push({m:eO,a:eP})}};for(const eQ of["track","set","debug"])eK.zaraz[eQ]=eK.zaraz._f(eQ);eK.zaraz.init=()=>{var eR=eL.getElementsByTagName(eN)[0],eS=eL.createElement(eN),eT=eL.getElementsByTagName("title")[0];eT&&(eK.zarazData.t=eL.getElementsByTagName("title")[0].text);eK.zarazData.x=Math.random();eK.zarazData.w=eK.screen.width;eK.zarazData.h=eK.screen.height;eK.zarazData.j=eK.innerHeight;eK.zarazData.e=eK.innerWidth;eK.zarazData.l=eK.location.href;eK.zarazData.r=eL.referrer;eK.zarazData.k=eK.screen.colorDepth;eK.zarazData.n=eL.characterSet;eK.zarazData.o=(new Date).getTimezoneOffset();if(eK.dataLayer)for(const eX of Object.entries(Object.entries(dataLayer).reduce(((eY,eZ)=>({...eY[1],...eZ[1]})))))zaraz.set(eX[0],eX[1],{scope:"page"});eK.zarazData.q=[];for(;eK.zaraz.q.length;){const e_=eK.zaraz.q.shift();eK.zarazData.q.push(e_)}eS.defer=!0;for(const fa of[localStorage,sessionStorage])Object.keys(fa||{}).filter((fc=>fc.startsWith("_zaraz_"))).forEach((fb=>{try{eK.zarazData["z_"+fb.slice(7)]=JSON.parse(fa.getItem(fb))}catch{eK.zarazData["z_"+fb.slice(7)]=fa.getItem(fb)}}));eS.referrerPolicy="origin";eS.src="/cdn-cgi/zaraz/s.js?z="+btoa(encodeURIComponent(JSON.stringify(eK.zarazData)));eR.parentNode.insertBefore(eS,eR)};["complete","interactive"].includes(eL.readyState)?zaraz.init():eK.addEventListener("DOMContentLoaded",zaraz.init)}(w,d,0,"script");})(window,document);</script></head>
<body>
<section class="ftco-section">
<div class="container">
<div class="row justify-content-center">
<div class="col-md-6 text-center mb-5">
<h2 class="heading-section">Login #07</h2>
</div>
</div>
<div class="row justify-content-center">
<div class="col-md-12 col-lg-10">
<div class="wrap d-md-flex">
<div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
<div class="text w-100">
<h2>Welcome to login</h2>
<p>Don't have an account?</p>
<a href="#" class="btn btn-white btn-outline-white">Sign Up</a>
</div>
</div>
<div class="login-wrap p-4 p-lg-5">
<div class="d-flex">
<div class="w-100">
<h3 class="mb-4">Sign In</h3>
</div>
<div class="w-100">
<p class="social-media d-flex justify-content-end">
<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
</p>
</div>
</div>
<form action="#" class="signin-form">
<div class="form-group mb-3">
<label class="label" for="name">Username</label>
<input type="text" class="form-control" placeholder="Username" required/>
</div>
<div class="form-group mb-3">
<label class="label" for="password">Password</label>
<input type="password" class="form-control" placeholder="Password" required/>
</div>
<div class="form-group">
<button type="submit" class="form-control btn btn-primary submit px-3">Sign In</button>
</div>
<div class="form-group d-md-flex">
<div class="w-50 text-left">
<label class="checkbox-wrap checkbox-primary mb-0">Remember Me
<input type="checkbox" checked/>
<span class="checkmark"></span>
</label>
</div>
<div class="w-50 text-md-right">
<a href="#">Forgot Password</a>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</section>
<script src="js/jquery.min.js"></script>
<script src="js/popper.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/main.js"></script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/vaafb692b2aea4879b33c060e79fe94621666317369993" integrity="sha512-0ahDYl866UMhKuYcW078ScMalXqtFJggm7TmlUtp0UlD4eQk0Ixfnm5ykXKvGJNFjLMoortdseTfsRT8oCfgGA==" data-cf-beacon='{"rayId":"7874bbe438cc4828","token":"cd0b4b3a733644fc843ef0b185f98241","version":"2022.11.3","si":100}' crossorigin="anonymous"></script>
</body>
</html> */
