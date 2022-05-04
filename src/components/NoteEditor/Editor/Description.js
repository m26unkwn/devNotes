import React from "react";
import { useNote } from "../../../context";

export const Description = () => {
  const {
    noteState: { description },
    noteDispatch,
  } = useNote();

  const dispatchDescription = (e) => {
    noteDispatch({
      type: "ADD_DESCRIPTION",
      description: e.currentTarget.textContent,
    });
  };

  return (
    <div className='text-container'>
      <div
        className='title text'
        data-placeholder='enter note'
        contentEditable={true}
        aria-multiline={true}
        role='textbox'
        aria-label={"Title"}
        tabIndex={0}
        onInput={dispatchDescription}></div>
    </div>
  );
};
