// The main component file
import React from "react";
import SingleAccordion from "./SingleAccordion";

const Eastar = ({
  dataList,
  isOpen = false,
  showWordCount = false,
  handleClick,
}) => {
  return (
    <div className="grid gap-2">
      {dataList.length === 0 ? (
        <SingleAccordion />
      ) : (
        dataList.map((data) => (
          <SingleAccordion
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
            active={isOpen}
            showWordCount={showWordCount}
            handleClick={handleClick}
          />
        ))
      )}
    </div>
  );
};

export default Eastar;
