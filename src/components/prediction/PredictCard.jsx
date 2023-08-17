/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import PredictionDetails from "./PredictionDetails/PredictionDetails";
import PredictionComments from "./PredictionDetails/PredictionComments";
import { useDispatch, useSelector } from "react-redux";
import { loadPredictionComments } from "../../redux/actions/comments";
import { getComments } from "../../api/comment";
import { message } from "antd";
import {
  allLikes,
  likePrediction,
  unlikePrediction,
} from "../../api/prediction";

const PredictCard = ({ p }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [openComments, setOpenComments] = useState(false);

  const { user } = useSelector((state) => state.users);

  const [comments, setcomments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(true);

  const predictionComments = async () => {
    const res = await getComments(p._id);

    try {
      if (res.success) {
        message.success(res.message);
        setcomments(res.data);
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  const predictionLikes = async () => {
    try {
      const res = await likePrediction({ predictionId: p?._id });
      if (res.success) {
        message.success(res.message);
        getAllLikes();
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const predictionUnlikes = async () => {
    try {
      const res = await unlikePrediction({ predictionId: p._id });
      getAllLikes();
      if (res.success) {
        message.success(res.message);
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  const getAllLikes = async () => {
    try {
      const res = await allLikes({ predictionId: p._id });

      if (res.isLiked) {
        setIsLiked(true);
        setLikes(res.data);
      } else {
        setIsLiked(false);
        setLikes(res.data);
      }
      if (res.success) {
        message.success(res.message);
        setLikes(res.data);
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const ratingStar = (team) => {
    let star = [];
    for (let i = 1; i <= team; i++) {
      star.push(<i className="ri-star-fill text-xs"></i>);
      console.log(p.rating.home);
      if (i === Math.floor(team) && Math.ceil(team) !== team) {
        star.push(<i className="ri-star-half-fill text-xs"></i>);
      }
    }
    return star;
  };

  useEffect(() => {
    predictionComments();
    getAllLikes();
    ratingStar();
  }, []);

  return (
    <div
      className={`bg-[#023364] shadow-[0px_0px_20px_rgb(250,250,250)] text-sm ${
        p.result === "won"
          ? "text-green-500"
          : p.result === "loss"
          ? "text-red-400"
          : "text-yellow-400"
      } text-center border border-red-500  place-items-center w-full md:w-[500px] lg:max-w-lg grid grid-cols-10 gap-1 py-3 font-mono relative`}
    >
      <p className="col-span-3">
        {" "}
        {p.home}{" "}
        <span className="whitespace-nowrap block col-span-2">
          {ratingStar(p?.rating?.home)}
        </span>{" "}
      </p>
      <p className="text-white col-span-1">
        <>
          {p.result === "won" ? (
            <span className="block">
              <i className="ri-checkbox-circle-fill text-green-500 text-[20px] block"></i>
              <i className="ri-eye-line text-green-500 text-[20px] block"></i>
            </span>
          ) : p.result === "loss" ? (
            <span>
              <i className="ri-close-circle-fill text-red-400 text-[20px] block"></i>
              <i className="ri-eye-line text-red-400  text-[20px] block"></i>
            </span>
          ) : (
            <b className="text-yellow-400 ">
              VS{" "}
              <span>
                {" "}
                <i
                  className="ri-eye-line block cursor-pointer"
                  onClick={() => setOpenDetails(true)}
                ></i>{" "}
              </span>{" "}
            </b>
          )}
        </>
      </p>

      <p className="col-span-3">
        {" "}
        {p.away}
        <span className="block">{ratingStar(p?.rating?.away)}</span>{" "}
      </p>
      <div className="font-bold max-sm:text-right pr-[2px] block col-span-3">
        {" "}
        {p.tip}{" "}
        <div>
          {isLiked ? (
            <span
              onClick={() => {
                predictionUnlikes();
              }}
            >
              {" "}
              <i className="ri-thumb-up-fill text-sm cursor-pointer">
                {" "}
                {likes.length}{" "}
              </i>
            </span>
          ) : (
            <span
              onClick={() => {
                predictionLikes();
              }}
            >
              {" "}
              <i className="ri-thumb-up-line text-sm cursor-pointer">
                {" "}
                {likes?.length}{" "}
              </i>
            </span>
          )}

          <span>
            {" "}
            <i
              className="ri-message-2-line text-sm cursor-pointer"
              onClick={() => setOpenComments(true)}
            >
              {comments?.length}
            </i>{" "}
          </span>
        </div>
      </div>

      {openDetails && (
        <PredictionDetails
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
        />
      )}

      {openComments && (
        <PredictionComments
          data={p}
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

export default PredictCard;
