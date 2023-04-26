function GridBox({ gridRow }) {
  return (
    <div className="grid grid-cols-9 gap-0">
      {gridRow?.map((_, idx) => (
        <input
          className={
            idx === 3 || idx === 6
              ? "border-l-4 text-center border border-solid border-gr text-2xl h-[4.5rem] w-[4.15rem]"
              : "text-center border border-solid border-gr text-2xl h-[4.5rem] w-[4.18rem]"
          }
        />
      ))}
    </div>
  );
}

export default GridBox;
