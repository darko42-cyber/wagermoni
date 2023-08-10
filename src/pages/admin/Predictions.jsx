import { Button, Table, message } from "antd";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import { deletePrediction } from "../../api/prediction";
import { getAllPredictions } from "../../redux/actions/predictions";
// import { SetLoader } from "../../redux/loaderSlice";

const Predictions = ({ setSelectedPrediction, setOpenModal }) => {
  const { predictions } = useSelector((state) => state.predictions);

  const dispatch = useDispatch();

  const columns = [
    { title: "Home", dataIndex: "home" },
    { title: "Away", dataIndex: "away" },
    {
      title: "User",
      dataIndex: "name",
      render: (text, record) => {
        return record?.user?.name ?? "Admin";
      },
    },
    { title: "GameType", dataIndex: "gameType" },
    { title: "League", dataIndex: "league" },
    { title: "Tip", dataIndex: "tip" },
    { title: "Result", dataIndex: "result" },

    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        const { status, _id } = record;
        return (
          <div className="flex gap-3">
            {status === "pending" && (
              <span className="underline cursor-pointer" onClick={() => ""}>
                Approve
              </span>
            )}
            {status === "pending" && (
              <span className="underline cursor-pointer" onClick={() => ""}>
                Reject
              </span>
            )}
            {status === "approved" && (
              <span className="underline cursor-pointer" onClick={() => ""}>
                Block
              </span>
            )}
            {status === "blocked" && (
              <span className="underline cursor-pointer" onClick={() => ""}>
                Unblock
              </span>
            )}
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        const { status, _id } = record;
        return (
          <div className="flex gap-3">
            <span>
              {" "}
              <i
                className="ri-delete-bin-fill cursor-pointer"
                onClick={() => {
                  deletePrediction(_id);
                  dispatch(getAllPredictions());
                }}
              ></i>
            </span>
            <span>
              {" "}
              <i
                className="ri-pencil-line cursor-pointer"
                onClick={() => {
                  setOpenModal(true);
                  setSelectedPrediction(record);
                }}
              ></i>
            </span>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={predictions} />
    </div>
  );
};

export default Predictions;
