// The main component file
import React from "react";

const Eastar = ({ dataList }) => {
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
          />
        ))
      )}
    </div>
  );
};

function SingleAccordion({ id, title, description, isOpen = true }) {
  return (
    <details
      className="bg-slate-100 w-64 sm:w-72 md:w-80 border border-spacing-28 px-4 py-2 rounded"
      open={isOpen}
    >
      <summary className="text-zinc-800 font-semibold cursor-pointer">
        {title} &mdash; ({description.length} count)
      </summary>
      <div className="text-zinc-600">{description}</div>
    </details>
  );
}

export default Eastar;
