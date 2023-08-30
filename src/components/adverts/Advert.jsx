import React from "react";
import { Link } from "react-router-dom";

const Advert = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-max rounded-b-3xl bg-primary text-white fixed top-[70px] text-base z-[999] p-3 shadow-md flex items-center justify-center'>
        <Link to='tel:0204079169'>
          whatsapp <sup className='text-xs'>click me</sup>
          <i className='ri-whatsapp-line text-green-500'></i>
          <span className='text-lg font-bold inline-block ml-1'>
            0204079169
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Advert;
