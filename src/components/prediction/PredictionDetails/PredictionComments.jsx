/* eslint-disable react/prop-types */
import { Button, Modal, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import CommentsCard from "./CommentsCard";
import CommentsForm from "./CommentsForm";
import { getComments } from "../../../api/comment";

const PredictionComments = ({
  openComments,
  setOpenComments,
  data,
  comments,
  setComments,
  predictionComments,
}) => {
  console.log(comments);
  return (
    <div>
      <Modal
        open={openComments}
        onCancel={() => setOpenComments(false)}
        footer={
          [
            // <Button key="submit" type="primary">
            //   Comment
            // </Button>,
          ]
        }
        bodyStyle={{
          width: "100%",
        }}
      >
        <h2 className="mb-10 text-center text-gray-600">Comments</h2>
        <div className="overflow-y-auto max-h-[50vh] mb-5 w-full">
          {comments?.map((comment) => (
            <CommentsCard key={comment._id} comment={comment} />
          ))}
        </div>
        <div>
          <CommentsForm data={data} predictionComments={predictionComments} />
        </div>
      </Modal>
    </div>
  );
};

export default PredictionComments;
