/* eslint-disable react/prop-types */
import { Form, Input, Modal, Tabs, message } from "antd";
import React from "react";

import { useRef } from "react";

import { useDispatch } from "react-redux";

import { NewOddsEvent } from "../../redux/actions/oddsEvent";

const OddsEventForm = ({ openOddsEvent, setOpenOddsEvent }) => {
  const dispatch = useDispatch();

  const formRef = useRef(null);

  const handleSubmit = async (value) => {
    try {
      dispatch(NewOddsEvent(value));
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    open && (
      <Modal
        open={openOddsEvent}
        onCancel={() => setOpenOddsEvent(false)}
        centered
        width={400}
        okText="Save"
        bodyStyle={{
          height: "65vh",
          overflowY: "scroll",
          marginTop: "25px",
        }}
        onOk={() => {
          formRef.current.submit();
        }}
        okButtonProps={{ style: { backgroundColor: "green" } }}
      >
        <div className="w-full">
          <h1 className="text-center text-2xl text-gray-500">New Odds Event</h1>
          <Tabs>
            <Tabs.TabPane key="1" tab="General">
              <Form layout="vertical" ref={formRef} onFinish={handleSubmit}>
                <Form.Item label="IDs - seperate by ," name="games">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item label="Booking Code" name="bookingCode">
                  <Input placeholder="Enter code" />
                </Form.Item>
                <Form.Item label="Accuracy" name="accuracy">
                  <Input placeholder="" type="number" />
                </Form.Item>
                <Form.Item label="Price" name="price">
                  <Input type="number" />
                </Form.Item>
                <Form.Item label="Total Odds" name="odds">
                  <Input type="number" />
                </Form.Item>
                <Form.Item label="Date" name="date">
                  <Input
                    type="date"
                    min={new Date().toISOString().slice(0, 10)}
                  />
                </Form.Item>
                <Form.Item label="Kick off" name="time">
                  <Input type="time" />
                </Form.Item>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane key="2" tab="Images"></Tabs.TabPane>
          </Tabs>
        </div>
      </Modal>
    )
  );
};

export default OddsEventForm;
