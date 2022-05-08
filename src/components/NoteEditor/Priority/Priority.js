import React from "react";

export const Priority = ({ noteDispatch }) => {
  const dispatchPriority = (e) => {
    noteDispatch({ type: "ADD_PRIORITY", priority: e.target.value });
  };
  return (
    <div className='flex ai-center flex-gap'>
      <p>Priority</p>
      <select onChange={dispatchPriority} className='select-priority'>
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
      </select>
    </div>
  );
};
