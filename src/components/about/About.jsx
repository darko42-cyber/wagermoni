import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h1 className="text-gray-700">About Wager Moni</h1>

      <div className="max-w-md w-full p-5  text-gray-700">
        <p className="text-gray-700">
          Wager moni is a football predictions group and fixed match agency. We
          buy and sell reliable fixed match to our premium subscribers at 50%
          money back offer.
        </p>
        <p>One month money back is assured.</p>
      </div>
      <div className="max-w-md w-full p-5">
        <h2 className="text-gray-700">Correct Score / Fixed </h2>
        <p className="text-gray-700">
          Reliable source for correct score matches and absolute fixed game
        </p>
      </div>

      <div className="max-w-md w-full p-5  text-gray-700">
        <h2>Corners</h2>
        <p>
          Corner range <sup>5-6</sup> and more
        </p>
        <p>
          Overs / Unders <sup>8.5 </sup>and more
        </p>
      </div>
      <div className="max-w-md w-full p-5  text-gray-700">
        <h2>Home / Away</h2>
        <p>
          <sup>1 or 2</sup> and more
        </p>
        <p>
          Overs / Unders <sup>2.5 </sup>and more
        </p>
      </div>
      <div className="max-w-md w-full p-5  text-gray-700">
        <h2>Goals</h2>
        <p>
          <sup>GG</sup> and more
        </p>
        <p>
          BTTS <sup>3.5</sup> and more
        </p>
      </div>
      <div className="max-w-md w-full p-5 text-gray-700">
        <h2>Booking</h2>
        <p>
          Yellow cards
          <sup className="w-4 h-4 bg-yellow-500">35.5</sup> and more
        </p>
        <p>
          Red cards
          <sup className="w-4 h-4 bg-red-500">35.5</sup> and more
        </p>
      </div>

      <div className="max-w-md w-full text-gray-700 p-5">
        <h2>Contact Info</h2>
        <p className="p-2 flex gap-1">
          Contact: <sup>+233</sup>
          <b>0500159575</b>
        </p>
        <p className="p-2">
          Email:
          <span className="inline-block p-2">
            <b>wagermoni@gmail.com</b>
          </span>
        </p>
      </div>
      <div className="max-w-md w-full text-gray-700 p-5">
        <h2>Terms and Condition</h2>
        <p className="pb-2">
          50% money is paid to you on{" "}
          <b>
            <big>VOID</big>
          </b>{" "}
          and{" "}
          <b>
            <big>FIXED MATCH</big>
          </b>{" "}
          or other events that have money back included.
        </p>
        <p>
          30% money is paid to us on{" "}
          <b>
            <big>FREE</big>
          </b>{" "}
          and{" "}
          <b>
            <big>PROMO</big>
          </b>{" "}
          or other price free odds.
        </p>
      </div>
    </div>
  );
};

export default About;
