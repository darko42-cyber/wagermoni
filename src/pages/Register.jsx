import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { RegisterUser } from "../api/user";
import { useSelector } from "react-redux";
const Register = () => {
  const { isAuthenticated } = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await RegisterUser({ name, email, password });
      if (res.success) {
        navigate("/");
        window.location.reload();
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <form
      className="p-5 border-sm bg-slate-200 text-white flex items-center justify-center h-screen w-full"
      onSubmit={handleSubmit}
    >
      <div className="w-full p-5 bg-white shadow-[0px_3px_3px_rgba(0,0,0,0.3)] text-black max-w-md">
        <Link to="/register">
          <h2 className="text-center p-5 text-2xl  text-gray-500">
            Sign Up <i className="ri-login-box-line"></i>{" "}
          </h2>
        </Link>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="block py-2">Username</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg border-solid outline-none p-2 h-10 placeholder:tracking-widerst"
              aria-required
              placeholder="Enter your username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="block py-2"> Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded-lg border-solid outline-none p-2 h-10 placeholder:tracking-widerst"
              aria-required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="block py-2"> Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="p-2 h-10 placeholder::tracking-widerst border border-gray-300 rounded-lg border-solid outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="p-2 w-full rounded-xl mt-5 text-white border-none outline-none bg-primary cursor-pointer"
          >
            Submit
          </button>
          <span className="text-gray-700">
            {" "}
            Already have an account ?{" "}
            <Link to="/login">
              {" "}
              <small className="underline underline-offset-4 text-primary">
                Sign In
              </small>{" "}
            </Link>{" "}
          </span>
        </div>
      </div>
    </form>
  );
};

export default Register;
