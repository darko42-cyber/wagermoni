import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/images/logo1.png";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/actions/users";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { isAuthenticated, user } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <header className='fixed z-[999999]  bg-slate-200 top-0 right-0 w-full text-white flex items-center sm:justify-around shadow-[0_5px_5px_-5px_rgba(0,0,0,0.3)] h-[70px] '>
      <Link to='/'>
        <img src={logo} alt='' className='w-[6rem] ' />
      </Link>

      <nav className='hidden text-black sm:flex items-center gap-8'>
        <Link to='/investment'>Investment</Link>
        <Link to='#'>Tips</Link>
        <Link to='#'>Plans</Link>
        <Link to='/risk'>Risk</Link>
        <Link to='/about'>About Us</Link>
      </nav>
      <div className='hidden sm:flex gap-2 items-center justify-end'>
        <Button
          className='flex p-3 items-center gap-3'
          type='primary'
        >
          <Link
            to={`${
              isAuthenticated && user.role === "admin"
                ? "/admin"
                : "/"
            }`}
            className='flex items-center'
          >
            <span className='inline-block p-1'>
              Account
            </span>
            <i className='ri-shield-user-fill text-base text-sm mr-5 '></i>
          </Link>
        </Button>
        <Button
          className='flex p-3 items-center gap-2'
          key='submit'
          type='primary'
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          <Link to='/login' className='flex items-center'>
            {isAuthenticated ? (
              <>
                <span className='inline-block p-2'>
                  {isAuthenticated ? "Logout" : "Login"}
                </span>
                <i className='ri-logout-box-line text-base text-white'></i>{" "}
              </>
            ) : (
              <>
                <span className='inline-block p-2'>
                  Login
                </span>
                <i className='ri-login-box-line text-base text-white'></i>{" "}
              </>
            )}
          </Link>
        </Button>
      </div>
      <div className='sm:hidden w-full flex justify-end mr-5'>
        {showMenu ? (
          <i
            className='ri-close-line text-black text-2xl cursor-pointer'
            onClick={() => setShowMenu(false)}
          ></i>
        ) : (
          <i
            className='ri-menu-line text-black text-2xl cursor-pointer'
            onClick={() => setShowMenu(true)}
          ></i>
        )}
      </div>

      <div
        className={`bg-slate-200 showMenu p-5 ${
          showMenu
            ? "opacity-100 left-0"
            : "opacity-0 -left-96"
        } absolute w-full top-[100%] shadow-[0px_3px_5px_rgba(0,0,0,0.2)] sm:hidden`}
      >
        <nav className='text-black  w-full flex flex-col gap-4'>
          <Link
            to='/investment'
            className='hover:bg-slate-300 w-full showMenu p-1 block'
            onClick={() => setShowMenu(false)}
          >
            Investment
          </Link>
          <Link
            to='#'
            className='hover:bg-slate-300 w-full showMenu p-1 block'
            onClick={() => setShowMenu(false)}
          >
            Tips
          </Link>
          <Link
            to='#'
            className='hover:bg-slate-300 w-full showMenu p-1 block'
            onClick={() => setShowMenu(false)}
          >
            Plans
          </Link>
          <Link
            to='/risk'
            onClick={() => setShowMenu(false)}
            className='hover:bg-slate-300 w-full showMenu p-1 block'
          >
            Risk
          </Link>
          <Link
            to='/about'
            className='hover:bg-slate-300 w-full showMenu p-1 block'
          >
            About Us
          </Link>
        </nav>
        <div className='p-5 flex gap-5'>
          <Button
            className='flex p-3 items-center gap-2'
            type='primary'
          >
            <span
              className='flex items-center'
              onClick={() => {
                setShowMenu(false);
                if (
                  isAuthenticated &&
                  user.role === "admin"
                ) {
                  navigate("/admin");
                } else {
                  navigate("/");
                }
              }}
            >
              <span className='inline-block p-1'>
                Account
              </span>
              <i className='ri-shield-user-fill text-base text-sm mr-5 '></i>
            </span>
          </Button>
          <Button
            className='flex p-3 items-center gap-2'
            key='submit'
            type='primary'
            onClick={() => {
              navigate("/login");
            }}
          >
            <Link to='/login' className='flex items-center'>
              {isAuthenticated ? (
                <>
                  <span className='inline-block p-2'>
                    {isAuthenticated ? "Logout" : "Login"}
                  </span>
                  <i className='ri-logout-box-line text-base text-white'></i>{" "}
                </>
              ) : (
                <>
                  <span className='inline-block p-2'>
                    Login
                  </span>
                  <i className='ri-login-box-line text-base text-white'></i>{" "}
                </>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
