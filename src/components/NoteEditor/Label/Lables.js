import React from "react";
import { Remove } from "../../../assets";
import { useNote } from "../../../context";
import "./label.css";

export const Lables = () => {
  const {
    noteState: { lables },
    noteDispatch,
  } = useNote();

  const removeLabelDispatch = (id) => {
    noteDispatch({ type: "REMOVE_LABEL", id: id });
  };

  return (
    <div className='label-chip-container flex'>
      {lables.map((label) => (
        <div key={label.id} className='lable-chip flex ai-center jc-between'>
          <p className="'chips">{label.label}</p>

          <button
            onClick={() => removeLabelDispatch(label.id)}
            className='chip-btn btn-icon flex ai-center'>
            <img src={Remove} alt='remove-label' />
          </button>
        </div>
      ))}
    </div>
  );
};
