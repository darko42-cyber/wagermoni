import React from "react";
import Login from "./Login";
import Header from "../components/layout/Header";

import Corners from "../components/prediction/Corners";
import Goals from "../components/prediction/Goals";
import Fulltime from "../components/prediction/Fulltime";
import Events from "../components/events/Events";

const Home = () => {
  return (
    <div className="m-1">
      <div className="my-20"></div>
      <div className="flex flex-col items-center">
        <div className="flex items-center  p-2 gap-5">
          <h1 className="text-3xl text-gray-500 ">Booking Code</h1>

          <span className="inline-block h-[30px] w-[30px] animate-ping">
            {" "}
            <i className="ri-football-fill text-[20px]"></i>{" "}
          </span>
        </div>
        <Events />
      </div>

      <div className="my-20"></div>
      <div className="flex flex-col items-center">
        <div className="flex items-center p-2 gap-5">
          <h1 className="text-3xl  text-gray-500 my-5 ">Corners</h1>

          <span className="h-[30px] w-[30px] animate-ping inline-block">
            {" "}
            <i className="ri-football-fill text-[20px]"></i>{" "}
          </span>
        </div>

        <Corners />
      </div>
      <div className="my-10"></div>
      <div className="flex flex-col items-center">
        <div className="flex items-center p-2 gap-5 ">
          <h1 className="text-3xl  text-gray-500">Goals</h1>
          <span className="h-[30px] w-[30px] animate-ping inline-block">
            {" "}
            <i className="ri-football-fill text-[20px]"></i>{" "}
          </span>
        </div>
        <Goals />
      </div>
      <div className="my-10"></div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl  text-gray-500 my-5 p-2">
            Fulltime / Halftime
          </h1>
          <span className="h-[30px] w-[30px] inline-block">
            {" "}
            <i className="ri-game-fill text-[20px]"></i>{" "}
          </span>
        </div>
        <Fulltime />
      </div>
    </div>
  );
};

export default Home;
