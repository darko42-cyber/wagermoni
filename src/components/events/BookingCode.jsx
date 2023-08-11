import React, { useEffect, useState } from "react";

import { GetAllOddsEvent } from "../../redux/actions/oddsEvent";
import { useDispatch, useSelector } from "react-redux";

import BookingCard from "./BookingCard";
const BookingCode = () => {
  const [index, setIndex] = useState(0);

  const dispatch = useDispatch();

  const { allOddsEvent } = useSelector((state) => state.oddsEvents);

  useEffect(() => {
    dispatch(GetAllOddsEvent());
  }, [dispatch]);

  return (
    <>
      {allOddsEvent.map((data) => (
        <BookingCard key={data._id} data={data} />
      ))}
    </>
  );
};

export default BookingCode;
