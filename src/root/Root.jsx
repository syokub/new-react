import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "../index.css";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Layout from "../components/Layout/Layout";
import NavbarLayout from "../components/NavbarLayout/NavbarLayout";
import Home from "../pages/Home/Home";

export const Root = () => {
  const param = useParams();
  const [authenticated, setAuthenticated] = useState(false);
  //   const [backendData, setBackendData] = useState();

  //   const getBackendData = () => {
  //     fetch("/api")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setBackendData(data);
  //         console.log("data", data);
  //       });
  //   };

  useEffect(() => {
    // getBackendData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavbarLayout />}>
          <Route path="" element={<Home />} />
          <Route path="Product" element={<Home />} />
          <Route path="Service" element={<Home />} />
          <Route path="Contact" element={<Home />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="*" element={<p>Page not found222</p>} /> */}
      </Routes>
    </div>
  );
};

export default Root;
