/* eslint-disable react/prop-types */
import { Form, Input, Modal, Tabs, message } from "antd";
import React, { useEffect, useState } from "react";
import { Select, Space } from "antd";
import {
  accuracy,
  bookingOdds,
  cornerOdds,
  correctScoreOdds,
  fulltimeOdds,
  gameType,
  goalsOdds,
  league,
  predictOnBehalf,
  predictionHalf,
  rating,
  result,
} from "../../../data/leagues";
import { useRef } from "react";
import { createPrediction, updatePrediction } from "../../api/prediction";
import { useDispatch } from "react-redux";
import { getAllPredictions } from "../../redux/actions/predictions";

const PredictionForm = ({
  openModal,
  setOpenModal,
  selectedPrediction,
  setSelectedPrediction,
}) => {
  const dispatch = useDispatch();
  const handleChange = (value) => {
    if (
      value === "Corner" ||
      value == "Booking" ||
      value === "Fulltime" ||
      value === "Goal" ||
      value === "Correct Score"
    ) {
      setGameTypeCheck(value);
      console.log(value);
    }
  };

  const formRef = useRef(null);

  const [gameTypeCheck, setGameTypeCheck] = useState("");

  const handleSubmit = async (value) => {
    let res;
    try {
      if (selectedPrediction) {
        res = await updatePrediction(value, selectedPrediction._id);
      } else {
        res = await createPrediction(value);
      }
      if (res.success) {
        setOpenModal(false);
        message.success(res.message);
        setSelectedPrediction(null);
        dispatch(getAllPredictions());
      } else {
        message.error(res.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (selectedPrediction) {
      formRef.current.setFieldsValue(selectedPrediction);
      setGameTypeCheck(selectedPrediction?.gameType);
    }
  }, [selectedPrediction]);

  return (
    open && (
      <Modal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        centered
        width={400}
        okText="Save"
        bodyStyle={{
          height: "65vh",
          overflowY: "scroll",
          marginTop: "25px",
        }}
        onOk={() => formRef.current.submit()}
        okButtonProps={{ style: { backgroundColor: "green" } }}
      >
        <div className="w-full">
          <h1 className="text-center text-2xl text-gray-500">
            {selectedPrediction ? "Update Prediction" : "New Prediction"}
          </h1>
          <Tabs>
            <Tabs.TabPane key="1" tab="General">
              <Form layout="vertical" ref={formRef} onFinish={handleSubmit}>
                <Form.Item label="Home Team" name="home">
                  <Input />
                </Form.Item>
                <Form.Item label="Away Team" name="away">
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Choose Home Rating"
                  name="Ratinghome"
                  className="mr-2"
                >
                  <Select
                    defaultValue="2"
                    style={{ width: "90%" }}
                    onChange={handleChange}
                    options={rating.map((l) => {
                      return { value: l.value, label: l.title };
                    })}
                  />
                </Form.Item>
                <Form.Item
                  label="Choose Away Rating"
                  name="Ratingaway"
                  className="mr-2"
                >
                  <Select
                    defaultValue="1"
                    style={{ width: "90%" }}
                    onChange={handleChange}
                    options={rating.map((l) => {
                      return { value: l.title, label: l.title };
                    })}
                  />
                </Form.Item>
                <Form.Item label="Select league" name="league" className="mr-2">
                  <Select
                    defaultValue="Choose League"
                    style={{ width: "90%" }}
                    onChange={handleChange}
                    options={league.map((l) => {
                      return { value: l.title, label: l.title };
                    })}
                  />
                </Form.Item>
                <Form.Item label="Select Game Type" name="gameType">
                  <Select
                    defaultValue="Choose Game Type"
                    style={{ width: "90%" }}
                    onChange={handleChange}
                    options={gameType.map((l) => {
                      return { value: l.title, label: l.title };
                    })}
                  />
                </Form.Item>
                {gameTypeCheck == "Corner" && (
                  <Form.Item label="Tip selection" name="tip">
                    <Select
                      defaultValue="Over 8.5"
                      style={{ width: "90%" }}
                      onChange={handleChange}
                      options={cornerOdds.map((l) => {
                        return { value: l.value, label: l.value };
                      })}
                    />
                  </Form.Item>
                )}
                {gameTypeCheck == "Goal" && (
                  <Form.Item label="Tip selection" name="tip">
                    <Select
                      defaultValue="Over 1.5"
                      style={{ width: "90%" }}
                      onChange={handleChange}
                      options={goalsOdds.map((l) => {
                        return { value: l.title, label: l.title };
                      })}
                    />
                  </Form.Item>
                )}
                {gameTypeCheck == "Fulltime" && (
                  <Form.Item label="Tip selection" name="tip">
                    <Select
                      defaultValue="x"
                      style={{ width: "90%" }}
                      onChange={handleChange}
                      options={fulltimeOdds.map((l) => {
                        return { value: l.title, label: l.title };
                      })}
                    />
                  </Form.Item>
                )}
                {gameTypeCheck == "Booking" && (
                  <Form.Item label="Choose Cards" name="tip">
                    <Select
                      defaultValue="over 2.5"
                      style={{ width: "90%" }}
                      onChange={handleChange}
                      options={bookingOdds.map((l) => {
                        return { value: l.title, label: l.title };
                      })}
                    />
                  </Form.Item>
                )}
                {gameTypeCheck == "Correct Score" && (
                  <Form.Item label="Tip selection" name="tip">
                    <Select
                      defaultValue="0:0"
                      style={{ width: "90%" }}
                      onChange={handleChange}
                      options={correctScoreOdds.map((l) => {
                        return { value: l.title, label: l.title };
                      })}
                    />
                  </Form.Item>
                )}
                <Form.Item label="Half to predict" name="half">
                  <Select
                    defaultValue="Both halves"
                    style={{ width: "90%" }}
                    onChange={handleChange}
                    options={predictionHalf.map((l) => {
                      return { value: l.title, label: l.title };
                    })}
                  />
                </Form.Item>

                <Form.Item label="Team to predict for" name="onBehalf">
                  <Select
                    defaultValue="Both teams"
                    style={{ width: "90%" }}
                    onChange={handleChange}
                    options={predictOnBehalf.map((l) => {
                      return { value: l.title, label: l.title };
                    })}
                  />
                </Form.Item>
                {selectedPrediction && (
                  <>
                    <Form.Item label="Specify predictions" name="result">
                      <Select
                        defaultValue="Predict For"
                        style={{ width: "90%" }}
                        onChange={handleChange}
                        options={result.map((l) => {
                          return { value: l.title, label: l.title };
                        })}
                      />
                    </Form.Item>

                    <Form.Item label="Win Probability" name="accuracy">
                      <Select
                        defaultValue="Winning percent"
                        style={{ width: "90%" }}
                        onChange={handleChange}
                        options={accuracy.map((l) => {
                          return { value: l.value, label: l.title };
                        })}
                      />
                    </Form.Item>

                    <Form.Item label="Kick Off" name="time">
                      <Input type="time" />
                    </Form.Item>
                  </>
                )}
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane key="2" tab="Images"></Tabs.TabPane>
          </Tabs>
        </div>
      </Modal>
    )
  );
};

export default PredictionForm;
