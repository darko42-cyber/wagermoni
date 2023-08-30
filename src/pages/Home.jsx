import React from "react";
import Login from "./Login";
import Header from "../components/layout/Header";

import Corners from "../components/prediction/Corners";
import Goals from "../components/prediction/Goals";
import Fulltime from "../components/prediction/Fulltime";
import Events from "../components/events/Events";
import Advert from "../components/adverts/Advert";

const Home = () => {
  return (
    <div className='m-1'>
      <div className='my-20'></div>
      <div className='flex flex-col items-center'>
        <Advert />
        <div className='flex items-center  p-2 gap-5'>
          <h3 className='text-xl md:text-2xl text-gray-500 mt-20'>
            Booking Code
          </h3>

          <span className='inline-block h-[20px] w-[15px] animate-spin mt-20'>
            {" "}
            <i className='ri-football-fill text-[15px]'></i>{" "}
          </span>
        </div>
        <Events />
      </div>

      <div className='my-20'></div>
      <div className='flex flex-col items-center'>
        <div className='flex items-center p-2 gap-5'>
          <h3 className='text-xl md:text-2xl text-gray-500 my-5 '>
            Corners
          </h3>

          <span className='inline-block h-[20px] w-[15px] animate-ping'>
            {" "}
            <i className='ri-football-fill text-[15px]'></i>{" "}
          </span>
        </div>

        <Corners />
      </div>
      <div className='my-10'></div>
      <div className='flex flex-col items-center'>
        <div className='flex items-center p-2 gap-5 '>
          <h3 className='text-xl md:text-2xl  text-gray-500'>
            Goals
          </h3>
          <span className='inline-block h-[20px] w-[15px] animate-spin'>
            {" "}
            <i className='ri-football-fill text-[15px]'></i>{" "}
          </span>
        </div>
        <Goals />
      </div>
      <div className='my-10'></div>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center'>
          <h3 className='text-xl md:text-2xl  text-gray-500 my-5 p-2'>
            Fulltime / Halftime
            <span className='h-[30px] w-[30px] inline-block'>
              {" "}
              <i className='ri-game-fill text-[20px]'></i>{" "}
            </span>
          </h3>
        </div>
        <Fulltime />
      </div>
    </div>
  );
};

export default Home;
