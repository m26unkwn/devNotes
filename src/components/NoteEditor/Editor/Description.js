import React from "react";
import { useRef } from "react";
import { useNote } from "../../../context";

export const Description = () => {
  const {
    noteState: { description },
    noteDispatch,
  } = useNote();


  const dispatchDescription = (e) => {
    noteDispatch({
      type: "ADD_DESCRIPTION",
      description: e.target.value,
    });
  };

  return (
    <div className='text-container'>
      <textarea
        className='title text'
        placeholder='enter note...'
        value={description}
        onChange={dispatchDescription}
      />
    </div>
  );
};
