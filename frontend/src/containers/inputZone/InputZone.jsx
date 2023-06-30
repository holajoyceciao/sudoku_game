import _ from "lodash";
import { useEffect, useState } from "react";
import { HiPause } from "react-icons/hi";
import { HiPlayCircle } from "react-icons/hi2";

function InputZone({ onButtonClick, setButtonDisable }) {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        const hourCounter = Math.floor(time / 1000 / 60);
        const minuteCounter = Math.floor(time / 60);
        const secondCounter = time % 60;
        setHours(hourCounter);
        setMinutes(minuteCounter);
        setSeconds(secondCounter);
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (time) => {
    return String(time).padStart(2, "0");
  };

  const resetTime = () => {
    setTime(0);
    setIsActive(true);
    setHours("00");
    setMinutes("00");
    setSeconds("00");
  };
  const pauseTime = () => {
    setIsActive(false);
  };

  const getButtonValue = (e) => {
    let val = e;
    onButtonClick(val);

    setButtonDisable(false);
  };

  return (
    <div className=" h-full rounded-lg border border-solid border-stone-300 px-6 py-4">
      <div className="grid grid-cols-[70%_30%] gap-2 mb-4">
        <div className="grid grid-cols-[22%_60%] gap-2 mb-4">
          <p className="pt-2 text-textLightColor">Difficulty: </p>
          <input
            type="text"
            className="rounded-lg border border-solid border-stone-300 py-2 px-2"
            placeholder="Enter number 0.1 ~ 0.9"
          />
        </div>
        <div className="grid grid-cols-[65%_20%] text-textLightColor pt-2">
          <div>{`${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(
            seconds
          )}`}</div>
          <button
            className="text-lg mt-[-1.5rem]"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? <HiPause /> : <HiPlayCircle />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 h-96 mb-2">
        {_.range(1, 10)?.map((item, idx) => (
          <button
            key={idx}
            className="rounded-lg bg-bgLightColor text-mainColor text-2xl hover:bg-bgDarkColor"
            value={item}
            onClick={(e) => getButtonValue(e.target.value)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[35%_25%] gap-3">
        <button
          onClick={() => resetTime()}
          className="rounded-lg py-2 bg-mainColor text-white hover:border hover:border-solid hover:border-mainColor hover:bg-transparent hover:text-mainColor"
        >
          New Game
        </button>
        <button
          onClick={() => pauseTime()}
          className="rounded-lg border border-solid border-mainColor py-2 bg-transparent text-mainColor hover:text-white  hover:bg-mainColor"
        >
          Answer
        </button>
      </div>
    </div>
  );
}

export default InputZone;
