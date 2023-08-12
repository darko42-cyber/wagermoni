import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, message } from "antd";
import { LoginUser } from "../api/user";
import { useSelector } from "react-redux";
const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await LoginUser({ email, password });
      if (res.success) {
        message.success(res.message);
        localStorage.setItem("token", res.data);
        window.location.reload();
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <form
      className="p-10 border-sm bg-slate-200 text-white flex items-center justify-center h-screen w-full"
      onSubmit={handleSubmit}
    >
      <div className="w-full p-5 bg-white shadow-[0px_3px_3px_rgba(0,0,0,0.3)] text-black max-w-md">
        <Link to="/register">
          <h2 className="text-center p-5 text-2xl  text-gray-500">
            Login <i className="ri-login-box-line"></i>{" "}
          </h2>
        </Link>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="block py-2"> Email</label>
            <input
              type="email"
              className="border border-solid border-gray-300 outline-none p-2 h-10 placeholder:tracking-widerst "
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
              className="outline-none border border-solid border-gray-300 p-2 h-10  placeholder::tracking-widerst"
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
            {"Don't"} have an account ?{" "}
            <Link to="/register">
              {" "}
              <small className="underline underline-offset-4 text-primary">
                Sign Up
              </small>{" "}
            </Link>{" "}
          </span>
        </div>
      </div>
    </form>
  );
};

export default Login;
