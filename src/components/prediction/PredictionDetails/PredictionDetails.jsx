import { Modal } from "antd";
import React from "react";

const PredictionDetails = ({ openDetails, setOpenDetails }) => {
  return (
    <Modal open={openDetails} onCancel={() => setOpenDetails(false)}></Modal>
  );
};

export default PredictionDetails;
