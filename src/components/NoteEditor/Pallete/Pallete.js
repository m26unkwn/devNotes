import React from "react";
import "./pallete.css";

const colors = [
  { color: "#f28b82" },
  { color: "#fff475" },
  { color: "#a7ffeb" },
  { color: "#d7aefb" },
];
export const Pallete = ({ noteDispatch }) => {
  const dispatchColor = (color) => {
    noteDispatch({ type: "ADD_COLOR", color: color });
  };

  return (
    <div className='pallete-container card-container flex flex-wrap jc-center ai-center'>
      {colors.map((color) => (
        <div
          key={color.color}
          style={{ backgroundColor: color.color }}
          onClick={() => dispatchColor(color.color)}
          className='color'></div>
      ))}
    </div>
  );
};
