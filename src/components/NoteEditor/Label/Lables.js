import React from "react";
import { Chip } from "../../Chips/Chip";
import "./label.css";

export const Lables = ({ noteDispatch, lables }) => {
  const removeLabelDispatch = (id) => {
    noteDispatch({ type: "REMOVE_LABEL", id: id });
  };

  return (
    <div className='label-chip-container flex flex-wrap'>
      {lables.map((label) => (
        <Chip
          key={label.id}
          label={label.label}
          dispatch={removeLabelDispatch}
          id={label.id}
        />
      ))}
    </div>
  );
};
