/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const BookingCodeCountdown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(calculatorTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculatorTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculatorTimeLeft() {
    const difference = +new Date(data?.endDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / (1000 * 60)) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }
  const timerComponents = Object.keys(timeLeft).map((interval, index) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <span key={index} className="text-primary font-mono bold">
        {" "}
        {timeLeft[interval]}
        {interval}
      </span>
    );
  });
  return (
    <div>
      {timerComponents.length ? (
        <div className="flex items-center justify-center gap-1">
          {" "}
          {timerComponents}{" "}
        </div>
      ) : (
        <span>00:00 </span>
      )}
    </div>
  );
};

export default BookingCodeCountdown;
