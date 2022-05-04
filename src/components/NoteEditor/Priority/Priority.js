import React from "react";

export const Priority = () => {
  return (
    <div className='flex ai-center flex-gap'>
      <p>Priority</p>
      <select>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
  );
};
