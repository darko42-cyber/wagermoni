import React, { useEffect, useState } from "react";

import PredictCard from "./PredictCard";
import {corners} from "./data";
import { useSelector } from "react-redux";

const Corners = () => {
  const [predictions,setPredictions]= useState(corners)
  const [corners, setCorners] = useState([]);
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
      filteredData = predictions.filter((p) => p.gameType === "Corner");
      filteredData = filteredData.filter((d) => d.result === e.target.value);
      setCorners(filteredData);
      setLossCheck(false);
      setWonCheck(false);
    } else {
      setCorners(predictions.filter((p) => p.gameType === "Corner"));
    }
  };
  const handleWonChange = (e) => {
    setCorners(corners);
    setWonCheck(!wonCheck);
    if (e.target.checked) {
      setUnsetledCheck(false);
      setLossCheck(false);
      let filteredData;
      filteredData = predictions.filter((p) => p.gameType === "Corner");
      filteredData = filteredData.filter((d) => d.result === e.target.value);
      setCorners(filteredData);
    } else {
      setCorners(predictions.filter((p) => p.gameType === "Corner"));
    }
  };
  const handleLossChange = (e) => {
    setLossCheck(!lossCheck);
    if (e.target.checked) {
      let filteredData;
      filteredData = predictions.filter((p) => p.gameType === "corner");
      filteredData = filteredData.filter((d) => d.result === e.target.value);
      setCorners(filteredData);

      setUnsetledCheck(false);
      setWonCheck(false);
    } else {
      setCorners(predictions.filter((p) => p.gameType === "corner"));
    }
  };

  useEffect(() => {
    setPredictions(corners)
  }, [predictions]);
  return (
    <>
      <div className="flex flex-col  gap-2 my-3 md:items-center w-full">
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

            <div className="flex gap-2 items-center">
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

            <div className="flex gap-2 items-center">
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
            {corners?.map((p, index) => {
              if (p?.tip.startsWith("range")) {
                let trun = p?.tip.split(" ")[1];
                p = { ...p, tip: trun };
              }
              return <PredictCard key={index} p={p} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Corners;
