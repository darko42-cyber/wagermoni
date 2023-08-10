import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import logo from "../../../public/images/logo1.png";
const Footer = () => {
  return (
    <footer className="bg-slate-300 h-full max-h-sm mt-10 p-5">
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex lg:flex-row lg:justify-around">
        <section>
          <img src={logo} width={100} />
          <div className="flex flex-col">
            <p className="max-w-sm w-full">
              Constant victory is assured and you will have nothing to loose or
              fear when you sign up to any premium package or buy odds from us
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h2 className="text-gray-700">Links</h2>
          <div className="flex flex-col gap-3">
            <Link to="/tips">Tips</Link>
            <Link to="/investment">Investment</Link>
            <Link to="/risk">Risk</Link>
            <Link to="/about">About Us</Link>
            <Link to="/plans">Plans</Link>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h2 className="text-gray-700">Follow Us</h2>
          <div className="flex gap-3">
            <Link to="/tips">
              {" "}
              <Avatar
                shape="round"
                className="text-blue-500 bg-white"
                src={<i className="ri-facebook-fill "></i>}
              ></Avatar>
            </Link>
            <Link to="/tips">
              {" "}
              <Avatar
                shape="round"
                className="text-blue-500 bg-white"
                src={<i className="ri-twitter-fill "></i>}
              ></Avatar>
            </Link>
            <Link to="/tips">
              {" "}
              <Avatar
                shape="round"
                className="text-red-500 bg-white"
                src={<i className="ri-instagram-fill "></i>}
              ></Avatar>
            </Link>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <h2 className="text-gray-700">Text/Call</h2>
          <div className="flex gap-3">
            <Link to="/tips">
              {" "}
              <Avatar
                shape="round"
                className="text-blue-500 bg-white"
                src={<i className="ri-telegram-fill "></i>}
              ></Avatar>
            </Link>
            <Link to="/tips">
              {" "}
              <Avatar
                shape="round"
                className="text-green-500 bg-white"
                src={<i className="ri-whatsapp-fill "></i>}
              ></Avatar>
            </Link>
            <Link to="/tips">
              {" "}
              <Avatar
                shape="round"
                className="text-green-500 bg-white"
                src={<i className="ri-phone-fill "></i>}
              ></Avatar>
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h2 className="text-gray-700">Newsletter</h2>
          <div className="max-w-sm w-full">
            <p>
              Be the first to receive update about our plans and new premium
              features
            </p>
          </div>
          <div className="mt-5 border-solid border-black border rounded-lg p-1 flex items-center">
            <input
              type="text"
              placeholder="Email here"
              className="p-2 outline-none border-none bg-transparent"
            />
            <i className="ri-mail-fill text-gray-700"></i>
          </div>
        </section>
      </div>
      <div className="flex items-center gap-2 p-3 justify-center">
        Copyright
        <b>
          <i className="ri-copyright-fill"></i>
          2018
        </b>{" "}
        <p>All rights reserved</p>
      </div>

      <div className="flex items-center gap-2 p-3 justify-center">
        Developer
        <b>
          <big className="text-xl">@</big>Mr.Darko
        </b>{" "}
        <p>
          <Contact:big>
            <b>
              <sup>+233</sup>0546958807
            </b>
          </Contact:big>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
