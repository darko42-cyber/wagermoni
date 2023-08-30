import React from "react";
import { Link } from "react-router-dom";

const Advert = () => {
  return (
    <div className='flex items-center justify-center'>
      <Link to='tel:0204079169'>
        <div className='w-max bg-primary text-white fixed top-[70px] text-md z-[999] p-3 shadow-md flex items-center justify-center'>
          whatsapp{" "}
          <i className='ri-whatsapp-line text-green-500'></i>
          <span className='text-xl font-bold inline-block ml-1'>
            0204079169
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Advert;
