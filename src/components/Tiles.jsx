import React from "react";

const Tiles = ({ title, tilesData, handleTileClick, selectedData }) => {
  return (
    <>
      <p className="mt-15 text-xl font-medium">{title}</p>
      <div className="grid grid-cols-3 gap-x-5">
        {tilesData.map((budget) => {
          return (
            <div
              className={`mt-3 border rounded-md py-5 pl-5 pr-2 cursor-pointer hover:shadow-md ${
                selectedData === budget?.title
                  ? "border-black"
                  : "border-gray-200"
              }`}
              key={budget?.id}
              onClick={() => handleTileClick(budget)}
            >
              <p className="text-4xl">{budget?.image}</p>
              <p className="text-lg font-bold">{budget?.title}</p>
              <p className="text-gray-500">{budget?.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tiles;
