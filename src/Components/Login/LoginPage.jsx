import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import { Outlet,Navigate } from "react-router-dom";
import HumanIcon from "./Human.png"
import { useSelector } from 'react-redux';
import Footer from "../Footer/Footer";

const LoginPage = () => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);

  if (isLoggedIn) {
    return <Navigate to="/select" />
  }
  return (
    <>
    
      <div className="w-full flex justify-end bg-[#CDD6E8]">
        <Topbar />
      </div>
      <div className=" w-full sm:m-0 bg-[#CDD6E8]">
        <div className="w-full h-full flex flex-col md:flex-row ">
          <div className="md:w-[50%] flex items-center">
            <img
              src={HumanIcon}
              className="w-full p-[10%]"
              alt=""
              
            />
          </div>
          <div className="xs:w-[100%] md:w-[50%] flex justify-center items-center bg-[#CDD6E8]">
            <div className="bg-white xs:w-[78%] md:w-[70%] lg:w-[60%] xl:w-[55%] lg:h-[94%] rounded-[20px] border-3 w-[80%]">
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
