import { useState } from "react";
import GridBox from "./gridBox/GridBox";

function GameZone({ buttonValue, disableButton, setButtonDisable }) {
  const [randomNum, setRandomNum] = useState([
    [0, 3, 0, 1, 0, 5, 0, 0, 0],
    [2, 0, 4, 1, 0, 5, 7, 9, 8],
    [0, 3, 0, 0, 0, 5, 7, 0, 0],
    [0, 3, 0, 1, 0, 0, 0, 9, 8],
    [2, 0, 0, 0, 6, 0, 7, 0, 0],
    [2, 0, 4, 0, 0, 0, 0, 9, 8],
    [0, 3, 0, 0, 0, 5, 0, 9, 0],
    [0, 3, 0, 1, 6, 0, 0, 0, 0],
    [0, 3, 0, 1, 6, 0, 0, 0, 0],
  ]);

  // get the row of randomNum
  const num = randomNum?.map((row) => {
    return row;
  });
  console.log("randomNum: ", randomNum);
  console.log("num: ", num);

  const changeInputValue = (gridIdx, inputIndex) => {
    console.log("number index value:", randomNum[gridIdx][inputIndex]);
    let tempArray = JSON.parse(JSON.stringify(randomNum));

    console.log("tempArray", tempArray);
    console.log("randomNumIndex", randomNum[gridIdx][inputIndex]);
    console.log("buttonValue", buttonValue);
    if (
      (tempArray[gridIdx][inputIndex] === 0 &&
        randomNum[gridIdx][inputIndex] === 0) ||
      (tempArray[gridIdx][inputIndex] !== 0 &&
        randomNum[gridIdx][inputIndex] !== 0)
    ) {
      tempArray[gridIdx][inputIndex] = buttonValue;
      console.log("after randomNumIndex:", randomNum[gridIdx][inputIndex]);
      console.log("after tempArray", tempArray[gridIdx][inputIndex]);
      setRandomNum(tempArray);
      setButtonDisable(true);
    }
  };

  return (
    <div className="h-full px-6 py-4 grid grid-cols-3">
      {randomNum?.map((gridRow, idx) => (
        <GridBox
          key={idx}
          buttonValue={buttonValue}
          gridRow={gridRow}
          gridIdx={idx}
          onInputChange={changeInputValue}
          disableButton={disableButton}
        />
      ))}
    </div>
  );
}

export default GameZone;
