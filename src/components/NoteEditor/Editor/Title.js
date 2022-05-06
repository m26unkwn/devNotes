import React from "react";
import { useNote } from "../../../context";

export const Title = () => {
  const {
    noteState: { title },
    noteDispatch,
  } = useNote();
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
