import _ from "lodash";
import GridBox from "./containers/GridBox";

function App() {
  const random_num = [
    [0, 3, 0, 1, 0, 5, 0, 0, 0],
    [2, 0, 4, 1, 0, 5, 7, 9, 8],
    [0, 3, 0, 0, 0, 5, 7, 0, 0],
    [0, 3, 0, 1, 0, 0, 0, 9, 8],
    [2, 0, 0, 0, 6, 0, 7, 0, 0],
    [2, 0, 4, 0, 0, 0, 0, 9, 8],
    [0, 3, 0, 0, 0, 5, 0, 9, 0],
    [0, 3, 0, 1, 6, 0, 0, 0, 0],
    [0, 3, 0, 1, 6, 0, 0, 0, 0],
  ];

  return (
    <div className="w-[95%] m-auto">
      <h2 className="w-full text-center text-2xl font-medium mb-4">
        Sudoku Challenge
      </h2>
      <div className="grid grid-cols-[45%_35%] gap-4 justify-center">
        <div className="h-full rounded-lg border border-solid border-stone-300 px-6 py-4">
          {random_num?.map((gridRow) => (
            <GridBox gridRow={gridRow} />
          ))}
        </div>

        <div className=" h-full rounded-lg border border-solid border-stone-300 px-6 py-4">
          <div className="grid grid-cols-[80%_10%] gap-2 mb-4">
            <div className="grid grid-cols-[18%_50%] gap-2 mb-4">
              <p className="pt-2 text-[#94a3b7]">Difficulty: </p>
              <input
                type="text"
                className="rounded-lg border border-solid border-stone-300 py-2 px-2"
                placeholder="Enter number 0.1 ~ 0.9"
              />
            </div>
            <p className="pt-2 text-[#94a3b7]">Time: </p>
          </div>

          <div className="grid grid-cols-3 gap-2 h-96 mb-2">
            {_.range(1, 10)?.map((item) => (
              <button
                className="rounded-lg bg-[#eaeef4] text-[#0072e3] text-2xl hover:bg-[#d6dae0]"
                value={item}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-[35%_25%] gap-3">
            <button className="rounded-lg py-2 bg-[#0072e3] text-white hover:border hover:border-solid hover:border-[#0072e3] hover:bg-transparent hover:text-[#0072e3]">
              New Game
            </button>
            <button className="rounded-lg border border-solid border-[#0072e3] py-2 bg-transparent text-[#0072e3] hover:text-white  hover:bg-[#0072e3]">
              Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
