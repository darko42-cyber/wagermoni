import { Table } from "antd";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOddsEvent } from "../../api/oddsEvent";
import { GetAllOddsEvent } from "../../redux/actions/oddsEvent";

const Events = () => {
  const { allOddsEvent } = useSelector((state) => state.oddsEvents);
  const dispatch = useDispatch();

  const columns = [
    { title: "ID", dataIndex: "_id" },
    { title: "Price", dataIndex: "price" },
    {
      title: "User",
      dataIndex: "name",
      render: (text, record) => {
        return record?.user?.name ?? "Admin";
      },
    },
    {
      title: "Kick off",
      dataIndex: "endDate",
      render: (text, record) => {
        return moment(record.endDate).format("DD MM YYYY hh:mm:ss A");
      },
    },

    { title: "Booking Code", dataIndex: "bookingCode" },
    { title: "Result", dataIndex: "result" },

    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   render: (text, record) => {
    //     const { status, _id } = record;
    //     return (
    //       <div className="flex gap-3">
    //         {status === "pending" && (
    //           <span className="underline cursor-pointer" onClick={() => ""}>
    //             Approve
    //           </span>
    //         )}
    //         {status === "pending" && (
    //           <span className="underline cursor-pointer" onClick={() => ""}>
    //             Reject
    //           </span>
    //         )}
    //         {status === "approved" && (
    //           <span className="underline cursor-pointer" onClick={() => ""}>
    //             Block
    //           </span>
    //         )}
    //         {status === "blocked" && (
    //           <span className="underline cursor-pointer" onClick={() => ""}>
    //             Unblock
    //           </span>
    //         )}
    //       </div>
    //     );
    //   },
    // },
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
                  deleteOddsEvent(_id);
                  dispatch(GetAllOddsEvent());
                }}
              ></i>
            </span>
            <span>
              {" "}
              <i
                className="ri-pencil-line cursor-pointer"
                onClick={() => {
                  // setOpenModal(true);
                  // setSelectedPrediction(record);
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
      <Table columns={columns} dataSource={allOddsEvent} />
    </div>
  );
};

export default Events;
