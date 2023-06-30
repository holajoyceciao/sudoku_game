function GridBox({ gridRow, onInputChange, gridIdx, disableButton }) {
  console.log("disableButton", disableButton);
  return (
    <div className="grid grid-cols-3 border-2 border-solid border-gray-500 ml-[-2px] mt-[-2px]">
      {gridRow?.map((num, idx) => (
        <button
          key={idx}
          className={
            num !== 0
              ? "text-center border border-solid text-2xl h-[4.5rem] w-[4.15rem] leading-[4.5rem] bg-bgLightColor cursor-default"
              : "text-center border border-solid text-2xl h-[4.5rem] w-[4.15rem] cursor-pointer hover:bg-bgLightColor focus:ring-2 focus:ring-inset focus:ring-mainColor"
          }
          onClick={() => onInputChange(gridIdx, idx)}
          disabled={disableButton}
        >
          {num === 0 ? "" : num}
        </button>
      ))}
    </div>
  );
}
export default GridBox;
