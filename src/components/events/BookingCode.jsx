import React, { useEffect, useState } from "react";
import { goals } from "../../../data/prediction";
import { tenodds } from "../../../data/event";

import BookingCodeCountdown from "./BookingCodeCountdown";
import { Button, message } from "antd";
import EventDetails from "./EventDetails";
import { GetAllOddsEvent, likeOddsEvent } from "../../redux/actions/oddsEvent";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../api/comment";
import CommentsCard from "../prediction/PredictionDetails/CommentsCard";
import PredictionComments from "../prediction/PredictionDetails/PredictionComments";
import Comments from "../prediction/PredictionDetails/Comments";
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
        <Comments key={data._id} data={data} />
      ))}
    </>
  );
};

export default BookingCode;
