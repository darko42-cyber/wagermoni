import { Button, Form, Input, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { createComment } from "../../../api/comment";

const CommentsForm = ({ data, predictionComments }) => {
  const formRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  }, []);
  const [text, setText] = useState("");
  const onFinish = async (e) => {
    e.preventDefault();
    try {
      let values = { text, predictionId: data?._id };
      const res = await createComment(values);
      if (res.success) {
        message.success(res.message);
        setText("");
        predictionComments();
      } else {
        throw new Error(res.success);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <div className="w-full">
      <form ref={formRef}>
        <textarea
          placeholder="Add a comment"
          className="placeholder:text-gray-500 resize:none commentTextBox w-full h-10 p-2 rounded-md mb-2 border-none focus:outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={textRef}
        />

        <div className="flex justify-end w-full">
          <Button type="primary" key="submit" onClick={onFinish}>
            Comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommentsForm;
