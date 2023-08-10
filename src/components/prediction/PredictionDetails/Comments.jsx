/* eslint-disable react/prop-types */
import { Button, message } from "antd";
import EventDetails from "../../events/EventDetails";
import PredictionComments from "./PredictionComments";
import BookingCodeCountdown from "../../events/BookingCodeCountdown";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { likeOddsEvent } from "../../../redux/actions/oddsEvent";
import { getComments } from "../../../api/comment";

const Comments = ({ data }) => {
  const [openComments, setOpenComments] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();

  const predictionComments = async () => {
    const res = await getComments(data?._id);

    try {
      if (res.success) {
        message.success(res.message);
        setComments(res.data);
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-2 my-3 sm:items-center">
      <div
        className={`bg-[#f9fcfd] shadow-[-1px_2px_5px_rgba(0,0,0,0.5)] text-gray-700 rounded-md font-mono relative code-card `}
      >
        <div
          className={`w-full
flex items-center justify-between bg-black`}
        >
          <div className="flex justify-center w-full">
            <img
              src={
                data?.image
                  ? data?.image
                  : data?.odds === 5
                  ? "/images/5odds.png"
                  : data?.odds === 10
                  ? "/images/10odds.png"
                  : data?.odds === 20
                  ? "/images/20odds.png"
                  : "/images/30odds.png"
              }
              alt="Image"
              z
              width={150}
              height={150}
            />
          </div>
          <div className="flex justify-end items-end">
            <span className="flex flex-col">
              <i
                className="ri-eye-fill text-gray-500 flex items-center p-2"
                onClick={() => setOpenDetails(true)}
              ></i>{" "}
              <i
                className="ri-fire-fill text-red-500 flex items-center p-2 cursor-pointer"
                onClick={() => {
                  dispatch(likeOddsEvent(data._id));
                }}
              >
                {" "}
                <small className="text-white cursor-pointer">
                  {data?.likes?.length}
                </small>{" "}
              </i>
              <i
                className="ri-message-2-line text-primary flex items-center p-2 cursor-pointer"
                onClick={() => {
                  setOpenComments(true);
                  predictionComments();
                }}
              >
                {" "}
                <small className="text-white">32</small>{" "}
              </i>
            </span>
          </div>
        </div>

        <div>
          <div>
            <div className="flex items-center justify-center  gap-5">
              <span className="font-extrabold tracking-widest">Kick off</span>
              <BookingCodeCountdown data={data} />
            </div>
            <div className="flex items-center justify-center gap-5">
              <span className="font-extrabold ">
                {" "}
                Accuracy {data?.accuracy}%{" "}
              </span>

              <span>
                {" "}
                <i className="ri-star-fill text-yellow-400 text-sm"></i>{" "}
                <i className="ri-star-fill text-yellow-400 text-sm"></i>{" "}
                <i className="ri-star-fill text-yellow-400 text-sm"></i>{" "}
                <i className="ri-star-fill text-yellow-400 text-sm"></i>{" "}
                <i className="ri-star-fill text-yellow-400 text-sm"></i>{" "}
              </span>
            </div>
          </div>

          <div className="p-3 gap-2 font-mono flex items-center justify-center text-white">
            <Button type="primary" className="bg-black text-white">
              Buy Code -50%
            </Button>
            <Button type="primary" className="flex items-center">
              Join Premium
              <i className="ri-money-dollar-circle-line text-lg"></i>
            </Button>
          </div>
        </div>
      </div>

      {openDetails && (
        <EventDetails
          modalOpen={openDetails}
          setModalOpen={setOpenDetails}
          data={data}
        />
      )}
      {openComments && (
        <PredictionComments
          data={data}
          openComments={openComments}
          setOpenComments={setOpenComments}
          setcomments={setOpenComments}
          comments={comments}
          predictionComments={predictionComments}
        />
      )}
    </div>
  );
};
export default Comments;
