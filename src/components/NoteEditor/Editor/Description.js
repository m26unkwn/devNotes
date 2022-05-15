import React from "react";

export const Description = ({ description, noteDispatch }) => {
  
  const dispatchDescription = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
    noteDispatch({
      type: "ADD_DESCRIPTION",
      description: e.target.value,
    });
  };

  return (
    <div className='text-container'>
      <textarea
        className=' text'
        placeholder='enter note...'
        multiline='true'
        value={description}
        onChange={dispatchDescription}
      />
    </div>
  );
};
