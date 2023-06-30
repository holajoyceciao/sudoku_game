import { useState } from "react";
import GameZone from "./containers/gameZone/GameZone";
import InputZone from "./containers/inputZone/InputZone";

function App() {
  const [buttonValue, setButtonValue] = useState();
  const [disableButton, setButtonDisable] = useState(true);

  const handButtonValue = (value) => {
    setButtonValue(value);
  };

  return (
    <div className="w-[95%] m-auto">
      <h2 className="w-full text-center text-2xl font-medium mb-4">
        Sudoku Challenge
      </h2>
      <div className="grid grid-cols-[45%_35%] gap-4 justify-center">
        <GameZone
          buttonValue={buttonValue}
          disableButton={disableButton}
          setButtonDisable={setButtonDisable}
        />
        <InputZone
          onButtonClick={handButtonValue}
          setButtonDisable={setButtonDisable}
        />
      </div>
    </div>
  );
}

export default App;
