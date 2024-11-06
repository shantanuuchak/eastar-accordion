import React from "react";

function SingleAccordion({
  title,
  description,
  active = true,
  showWordCount = false,
  handleClick = false,
}) {
  return (
    <details
      className="bg-slate-100 w-64 sm:w-72 md:w-80 border border-spacing-28 px-4 py-2 rounded"
      open={active}
    >
      <summary
        className="text-zinc-800 font-semibold cursor-pointer"
        onClick={handleClick ? handleClick : null}
      >
        {title}
        {showWordCount && (
          <span className="text-zinc-600 font-normal text-sm">
            &mdash; {description.split(" ").length} words
          </span>
        )}
      </summary>
      <div className="text-zinc-600">{description}</div>
    </details>
  );
}

export default SingleAccordion;
