import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form className=" border-sm border-red-50 shadow-md bg-black text-white flex items-center justify-center h-screen w-full">
      <div className="w-full p-10 bg-white text-black max-w-lg">
        <Link to="/login">
          <h2 className="text-center p-5 text-2xl  ">
            Sign Up <i className="ri-login-circle-fill"></i>{" "}
          </h2>
        </Link>

        <div className="flex flex-col ">
          <label className="block py-2"> Username</label>
          <input
            type="text"
            className="rounded-lg outline-none border border-red-500 p-3"
          />
        </div>
        <div className="flex flex-col">
          <label className="block py-2"> Email</label>
          <input
            type="text"
            className="rounded-lg outline-none border border-red-500 p-3"
          />
        </div>
        <div className="flex flex-col">
          <label className="block py-2"> Password</label>
          <input
            type="password"
            className="rounded-lg outline-none border border-red-500 p-3"
          />
        </div>
        <div className="flex justify-between items-center py-5 ">
          <label id="upload" htmlFor="upload" className="block py-2  ">
            <i
              className="ri-upload-line border border-red-500 p-2 rounded-full"
              id="upload"
            ></i>
          </label>
          <input
            type="file"
            id="upload"
            className="rounded-lg outline-none border border-red-500 p-3 hidden"
          />

          <i className="ri-account-circle-fill text-[30px] "></i>
        </div>
        <div className="text-center py-5 ">
          <button className="bg-red-500 text-white px-5 py-2 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
