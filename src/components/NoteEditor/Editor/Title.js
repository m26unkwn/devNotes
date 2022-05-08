import React from "react";

export const Title = ({ title, noteDispatch }) => {
  const dispatchTitle = (e) => {
    noteDispatch({ type: "ADD_TITLE", title: e.target.value });
  };

  return (
    <div className='title-container'>
      <input
        value={title}
        className='title'
        placeholder='Title'
        onChange={dispatchTitle}
      />
    </div>
  );
};
