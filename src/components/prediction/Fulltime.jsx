import React, { useEffect, useState } from "react";

import PredictCard from "./PredictCard";
import { useSelector } from "react-redux";

const Fulltime = () => {
  const [fulltime, setfullTime] = useState([]);
  const { predictions } = useSelector((state) => state.predictions);
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
      filteredData = predictions.filter((p) => p.gameType === "fulltime");
      filteredData = filteredData.filter((d) => d.result === e.target.value);
      setfullTime(filteredData);

      setLossCheck(false);
      setWonCheck(false);
    } else {
      setfullTime(predictions.filter((p) => p.gameType === "fulltime"));
    }
  };
  const handleWonChange = (e) => {
    setfullTime(fullTime);
    setWonCheck(!wonCheck);
    if (e.target.checked) {
      setUnsetledCheck(false);
      setLossCheck(false);
      let filteredData;
      filteredData = predictions.filter((p) => p.gameType === "fulltime");
      filteredData = filteredData.filter((d) => d.result === e.target.value);
      setfullTime(filteredData);
    } else {
      setfullTime(predictions.filter((p) => p.gameType === "fulltime"));
    }
  };
  const handleLossChange = (e) => {
    setLossCheck(!lossCheck);
    if (e.target.checked) {
      let filteredData;
      filteredData = predictions.filter((p) => p.gameType === "fulltime");
      filteredData = filteredData.filter((d) => d.result === e.target.value);
      setfullTime(filteredData);

      setUnsetledCheck(false);
      setWonCheck(false);
    } else {
      setfullTime(predictions.filter((p) => p.gameType === "fulltime"));
    }
  };

  useEffect(() => {
    if (predictions) {
      let filteredData = predictions.filter((p) => p.gameType === "fulltime");
      setfullTime(filteredData);
    }
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
            {fulltime.map((p, index) => {
              return <PredictCard key={index} p={p} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-full sm:max-w-lg">
        <div className="flex items-center gap-5 mt-5 flex-wrap p-2">
          <div className="flex items-center gap-2">
            <div className="w-[20px] h-[20px] bg-black text-white flex items-center justify-center p-2">
              1
            </div>
            <span className="inline-block">Home win</span>
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-[20px] h-[20px] bg-black text-white flex items-center justify-center p-2">
              2
            </div>
            <span className="inline-block">Away win</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-[20px] h-[20px] bg-black text-white flex items-center justify-center p-2">
              x
            </div>
            <span className="inline-block">Draw</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[20px] h-[20px] p-2 bg-black text-white flex items-center justify-center">
              FT
            </div>
            <span className="inline-block">Fulltime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[20px] h-[20px] text-[14px] p-2 bg-black text-white flex items-center justify-center">
              HT
            </div>
            <span className="inline-block">Half time</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-[20px] h-[20px] text-[14px] p-2 bg-black text-white flex items-center justify-center">
                1H
              </div>
              <span className="inline-block">First / second half</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-[20px] h-[20px] text-[14px] p-2 bg-black text-white flex items-center justify-center">
                2H
              </div>
              <span className="whitespace-nowrap">First & second half</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-[20px] h-[20px] text-[13px] p-2 bg-black text-white flex items-center justify-center">
                GG
              </div>
              <span className="whitespace-nowrap">Both teams score</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fulltime;
