/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import React, { useEffect, useRef } from "react";

const EventDetails = ({ modalOpen, setModalOpen, data }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <Modal
      open={modalOpen}
      onCancel={() => setModalOpen(false)}
      footer={null}
      centered
    >
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-center text-gray-700 p-2">Odds Details</h2>
          {data?.games?.map((game, i) => (
            <div
              key={i}
              className="flex gap-2 items-center p-3 font-mono text-base"
            >
              <h5> {game?.home} </h5>
              <span>vs</span>
              <h5> {game?.away} </h5>
              <span>
                <i className="ri-lock-fill"></i>
              </span>
              <h5> {game.gameType} </h5>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-between">
          <input
            ref={inputRef}
            type="text"
            placeholder="Unlock booking code"
            className="w-2/3 h-10 p-3 border-0 outline-none"
          />
          <Button className="flex items-center gap-2 h-10" type="primary">
            {" "}
            unlock <i className="ri-lock-unlock-fill"></i>{" "}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EventDetails;
