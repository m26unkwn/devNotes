import React from "react";
import { useNote } from "../../../context";

export const Title = () => {
  const {
    noteState,
    noteState: { title },
    noteDispatch,
  } = useNote();

  const dispatchTitle = (e) => {
    noteDispatch({ type: "ADD_TITLE", title: e.currentTarget.textContent });
  };

  return (
    <div className='title-container'>
      <div
        className='title'
        contentEditable={true}
        data-placeholder='Title'
        aria-multiline={true}
        role='textbox'
        aria-label='Title'
        onInput={dispatchTitle}
        tabIndex={0}></div>
    </div>
  );
};
