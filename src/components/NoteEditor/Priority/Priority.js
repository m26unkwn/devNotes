import React from "react";

export const Priority = ({ noteDispatch }) => {
  const dispatchPriority = (e) => {
    noteDispatch({ type: "ADD_PRIORITY", priority: e.target.value });
  };
  return (
    <div className='flex ai-center flex-gap'>
      <select onChange={dispatchPriority} className='select-priority'>
        <option value='low'>Low Priority</option>
        <option value='medium'>Medium Priority</option>
        <option value='high'>High Priority</option>
      </select>
    </div>
  );
};
