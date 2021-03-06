import React from "react";
import { Pin, OutlinePin } from "../../../assets";

export const Title = ({ title, noteDispatch, pin }) => {
  const dispatchTitle = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
    noteDispatch({ type: "ADD_TITLE", title: e.target.value });
  };

  const pinDispatch = () => {
    noteDispatch({ type: "TOGGLE_PIN" });
  };

  return (
    <div className='title-container flex'>
      <textarea
        value={title}
        className='title'
        placeholder='Title'
        onChange={dispatchTitle}
      />
      <button
        onClick={pinDispatch}
        className='btn btn-icon'
        title={pin ? "Remove Pin" : "Add Pin"}>
        {pin ? <img src={Pin} alt='pin' /> : <img src={OutlinePin} alt='pin' />}
      </button>
    </div>
  );
};
