import React from "react";

import { IoPerson } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaLock } from "react-icons/fa";

export const Login = () => {
  return (
    <header className="min-h-screen bg-gray-950 w-full flex justify-center items-center">
      <div className="  w-[400px] p-4 flex flex-col items-center">
        {/* imagen y nombre */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 w-[150px] h-[150px] rounded-full flex items-center justify-center">
            <IoPerson className="text-[75px] text-white" />
          </div>
          <div className="font-light p-2 text-2xl">Customer Name</div>
        </div>

        <form action="" className="w-full flex flex-col items-center">
          <div className="flex items-center justify-center mb-4 w-full">
            <CiMail className="text-lg mr-1 " />
            <input type="text" className=" outline-0 border-b-1 w-full  " />
          </div>
          <div className="flex items-center justify-center w-full ">
            <FaLock className="text-lg mr-1 " />
            <input type="password" className=" outline-0 border-b-1 w-full  " />
          </div>
          <button type="submit" className="mt-6 p-2 bg-sky-800 w-full">
            Ingresar
          </button>
        </form>
      </div>
    </header>
  );
};
