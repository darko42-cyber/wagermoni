import React, { useEffect, useState } from "react";
import { Button, Tabs } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Predictions from "./Predictions";
import Users from "./Users";
import PredictionForm from "./PredictionForm";
import Events from "./Events";
import OddsEventForm from "./OddsEventForm";
import { GetAllOddsEvent } from "../../redux/actions/oddsEvent";
const Admin = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openOddsEvent, setOpenOddsEvent] = useState(false);
  const [selectedPrediction, setSelectedPrediction] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllOddsEvent());
  });

  return (
    <div className="mt-24">
      <Tabs>
        <Tabs.TabPane tab="Predictions" key="1">
          <div className="flex justify-end p-5">
            <Button
              onClick={() => {
                setSelectedPrediction(null);
                setOpenModal(true);
              }}
            >
              Add Prediction
            </Button>
          </div>
          <Predictions
            setOpenModal={setOpenModal}
            setSelectedPrediction={setSelectedPrediction}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Users" key="2">
          <Users />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Events" key="3">
          <div className="flex justify-end p-5">
            <Button
              onClick={() => {
                setOpenOddsEvent(true);
              }}
            >
              Add Odds Event
            </Button>
          </div>
          <Events />
        </Tabs.TabPane>
      </Tabs>

      {open && (
        <PredictionForm
          openModal={openModal}
          setOpenModal={setOpenModal}
          selectedPrediction={selectedPrediction}
          setSelectedPrediction={setSelectedPrediction}
        />
      )}
      {openOddsEvent && (
        <OddsEventForm
          openOddsEvent={openOddsEvent}
          setOpenOddsEvent={setOpenOddsEvent}
        />
      )}
    </div>
  );
};

export default Admin;
