/*

=========================================================
* Now UI Kit React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2023 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// import { useEf fect } from 'react';

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import SignUpPage from "views/index-sections/SignUp";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import BloodbankHome from "views/index-sections/BloodbankHome"
// import HospitalHome from "views/index-sections/HospitalHome";
// import Timeline from "views/index-sections/Timeline";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const aboutProps = {
//   name: '', // replace with your actual data
// };
  


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/login-page" element={<SignUpPage />} />


      // Assuming you have aboutProps defined somewhere

{/* <Route path="/login-page" element={<SignUpPage location={{ aboutProps }} />} /> */}


      
      <Route path="/bloodbankHome" element={<BloodbankHome />} />
      {/* <Route path="/HospitalHome" element={< HospitalHome />} /> */}
      {/* <Route path="/bloodbankhome"
          render={(props) => <BloodbankHome {...props} />}/> */}
      {/* <Route path="/tracking-page" element={<Timeline />} /> */}

      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>


    
  </BrowserRouter>
);
