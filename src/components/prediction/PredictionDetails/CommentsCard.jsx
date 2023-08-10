import { Avatar } from "antd";
import React from "react";
import moment from "moment";

const CommentsCard = ({ comment }) => {
  return (
    <>
      <div className="flex gap-1 mb-5 w-full p-2">
        <div>
          {comment?.image ? (
            <img src={comment.image} alt="" />
          ) : (
            <Avatar rounded icon={<i className="ri-user-fill"></i>} />
          )}
        </div>

        <div className="flex flex-col">
          <h4 className="text-gray-500"> {comment?.userId?.name} </h4>
          <p className="max-w-sm text-gray-500 w-full">
            {comment?.text}

            <span className="text-gray-800 font-bold inline-block ml-2 whitespace-nowrap">
              {moment(comment?.createdAt).fromNow()}{" "}
            </span>
          </p>
        </div>
      </div>
      <hr className="mb-5 border-gray-100 border-2 border-solid" />
    </>
  );
};

export default CommentsCard;
