import React from "react";
import { Link } from "react-router-dom";

const Advert = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-max rounded-b-3xl bg-primary text-white fixed top-[70px] text-base z-[999] p-3 shadow-md flex items-center justify-center'>
        <Link
          to='tel:0204079169'
          className='text-white flex items-center justify-center gap-1'
        >
          whatsapp
          <div className='flex items-center justify-center'>
            <i className='ri-whatsapp-line text-green-500 text-sm'></i>
            <span className='text-lg font-bold inline-block ml-1 underline underline-offset-1'>
              0204079169
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Advert;
