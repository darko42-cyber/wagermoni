import React, { useEffect, useState } from "react";
import { goals } from "../../../data/prediction";
import PredictCard from "./PredictCard";
import { useSelector } from "react-redux";

const Goals = () => {
  const { predictions } = useSelector((state) => state.predictions);
  const [goals, setGoals] = useState([]);

  const [unsettled, setUnsettled] = useState("unsettled");
  const [loss, setLoss] = useState("loss");
  const [won, setWon] = useState("won");

  const [wonCheck, setWonCheck] = useState(false);
  const [lossCheck, setLossCheck] = useState(false);
  const [unsettledCheck, setUnsetledCheck] = useState(false);

  const handleUnsettledChange = (e) => {
    setUnsetledCheck(!unsettledCheck);
    if (e.target.checked) {
      let filteredData;
      filteredData = predictions.filter((p) => p.gameType === "Goal");
      filteredData = filteredData.filter((d) => d.result === e.target.value);
      setGoals(filteredData);
      setLossCheck(false);
      setWonCheck(false);
    } else {
      setGoals(predictions.filter((p) => p.gameType === "Goal"));
    }
  };
  const handleWonChange = (e) => {
    setGoals(goals);
    setWonCheck(!wonCheck);
    if (e.target.checked) {
      setUnsetledCheck(false);
      setLossCheck(false);
      let filteredData;
      filteredData = predictions.filter((p) => p.gameType === "Goal");
      filteredData = filteredData.filter((d) => d.result === e.target.value);
      setGoals(filteredData);
    } else {
      setGoals(predictions.filter((p) => p.gameType === "Goal"));
    }
  };
  const handleLossChange = (e) => {
    setLossCheck(!lossCheck);
    if (e.target.checked) {
      let filteredData;
      filteredData = predictions.filter((p) => p.gameType === "Goal");
      filteredData = filteredData.filter((d) => d.result === e.target.value);
      setGoals(filteredData);
      console.log(filteredData);
      setUnsetledCheck(false);
      setWonCheck(false);
    } else {
      setGoals(predictions.filter((p) => p.gameType === "Goal"));
    }
  };

  useEffect(() => {
    if (predictions) {
      let filteredData = predictions.filter((p) => p.gameType === "Goal");
      setGoals(filteredData);
    }
  }, [predictions]);

  return (
    <>
      <div className="w-full flex flex-col  gap-2 my-3 md:items-center">
        <div className="sm:text-center">
          <div className="flex items-center gap-2 font-mono">
            <div className="flex items-center gap-2 p-2">
              <div className="w-[20px] h-[20px] bg-yellow-400 "></div>
              <span className="inline-block">Unsettled</span>
              <input
                checked={unsettledCheck}
                value={unsettled}
                type="checkbox"
                className="font-[30px] w-[20px] h-[20px] "
                onChange={handleUnsettledChange}
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="w-[20px] h-[20px] bg-red-400 "></div>
              <span className="inline-block">Loss</span>
              <input
                type="checkbox"
                checked={lossCheck}
                className="font-[30px] w-[20px] h-[20px] "
                value={loss}
                onChange={handleLossChange}
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="w-[20px] h-[20px] bg-green-400 "></div>
              <span className="inline-block">Won</span>
              <input
                type="checkbox"
                value={won}
                checked={wonCheck}
                className="font-[30px] w-[20px] h-[20px] "
                onChange={handleWonChange}
              />
            </div>
          </div>
        </div>
        <div className="flex-col flex items-center justify-center text-black ">
          <div className=" bg-white  w-full flex items-center flex-col justify-center ">
            {goals.map((p, index) => {
              return <PredictCard key={index} p={p} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;
