/* eslint-disable react/prop-types */
import { Modal } from "antd";
import React, { useEffect, useRef } from "react";
import CommentsCard from "./CommentsCard";
import CommentsForm from "./CommentsForm";

const PredictionComments = ({
  openComments,
  setOpenComments,
  data,
  comments,
  setComments,
  predictionComments,
}) => {
  const scroll = useRef();

  useEffect(() => {
    scroll.current.scrollIntoView();
  }, []);
  return (
    <div>
      <Modal
        open={openComments}
        onCancel={() => setOpenComments(false)}
        footer={null}
        bodyStyle={{
          width: "100%",
        }}
        centered
      >
        <h2 className="mb-10 text-center text-gray-600">Comments</h2>
        <div className="overflow-y-auto max-h-[40vh] mb-5 w-full" ref={scroll}>
          {comments?.map((comment) => (
            <CommentsCard key={comment._id} comment={comment} />
          ))}
        </div>
        <div>
          <CommentsForm
            data={data}
            predictionComments={predictionComments}
            scroll={scroll}
          />
        </div>
      </Modal>
    </div>
  );
};

export default PredictionComments;
