import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo1.png";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/actions/users";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(showMenu);
  return (
    <header className="fixed z-[999999]  bg-slate-300 top-0 right-0 w-full text-white flex items-center sm:justify-around shadow-[0_5px_5px_-5px_rgba(0,0,0,0.3)] h-[70px] ">
      <Link to="/">
        <img src={logo} alt="" className="w-[6rem] " />
      </Link>

      <nav className="hidden text-black sm:flex items-center gap-8">
        <Link to="/investment">Investment</Link>
        <Link to="#">Tips</Link>
        <Link to="#">Plans</Link>
        <Link to="/risk">Risk</Link>
        <Link to="/about">About Us</Link>
      </nav>
      <div className="hidden sm:flex gap-2 items-center justify-end">
        <Button className="flex p-5 items-center gap-2">
          <Link
            to={`${isAuthenticated ? "/admin" : "/profile"}`}
            className="flex items-center"
          >
            <span className="inline-block p-2">Account</span>
            <i className="ri-shield-user-fill text-[24px] mr-5 text-gray-600"></i>
          </Link>
        </Button>
        <Button
          className="flex p-5 items-center gap-2"
          key="submit"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          <Link to="/login" className="flex items-center">
            {isAuthenticated ? (
              <>
                <span className="inline-block p-2">
                  {isAuthenticated ? "Logout" : "Login"}
                </span>
                <i className="ri-logout-box-line text-[24px] text-gray-600"></i>{" "}
              </>
            ) : (
              <>
                <span className="inline-block p-2">Login</span>
                <i className="ri-login-box-line text-[24px] text-gray-600"></i>{" "}
              </>
            )}
          </Link>
        </Button>
      </div>
      <div className="sm:hidden w-full flex justify-end mr-5">
        {showMenu ? (
          <i
            className="ri-close-line text-black text-2xl cursor-pointer"
            onClick={() => setShowMenu(false)}
          ></i>
        ) : (
          <i
            className="ri-menu-line text-black text-2xl cursor-pointer"
            onClick={() => setShowMenu(true)}
          ></i>
        )}
      </div>

      <div
        className={`bg-slate-200 showMenu p-5 ${
          showMenu ? "opacity-100 left-0" : "opacity-0 -left-96"
        } absolute w-full top-[100%] shadow-[0px_3px_5px_rgba(0,0,0,0.2)] sm:hidden`}
      >
        <nav className="text-black block  w-full">
          <ul className="block gap-3 text-base w-full">
            <li className="p-2 mt-2 cursor-pointer showMenu hover:bg-slate-300 hover:text-center">
              {" "}
              Risk{" "}
            </li>
            <li className="p-2 mt-2 cursor-pointer showMenu hover:bg-slate-300 hover:text-center">
              Investment
            </li>
            <li className="p-2 mt-2 cursor-pointer showMenu hover:bg-slate-300 hover:text-center">
              {" "}
              Tips{" "}
            </li>
            <li className="p-2 mt-2 cursor showMenu hover:bg-slate-300 hover:text-center">
              {" "}
              Plans{" "}
            </li>
            <li className="p-2 mt-2 cursor showMenu hover:bg-slate-300 hover:text-center">
              {" "}
              About Us{" "}
            </li>
          </ul>
        </nav>
        <div className="p-5 flex gap-5">
          <Button className="flex p-5 items-center justify-between gap-2">
            <span>Account</span>
            <Link to={`${isAuthenticated ? "/admin" : "/profile"}`}>
              <i className="ri-shield-user-fill text-[24px] mr-5 text-gray-600"></i>
            </Link>
          </Button>
          <Button className="flex p-5 items-center gap-2">
            <Link to="/login" className="flex items-center">
              <span className="inline-block p-2">Login</span>
              <i className="ri-login-box-line text-[24px] text-gray-600"></i>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
