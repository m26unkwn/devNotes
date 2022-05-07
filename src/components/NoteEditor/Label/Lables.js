import React from "react";
import { useNote } from "../../../context";
import { Chip } from "../../Chips/Chip";
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
    <div className='label-chip-container flex flex-wrap'>
      {lables.map((label) => (
        <Chip
          key={label.id}
          label={label.label}
          dispatch={removeLabelDispatch}
          id={label.id}
        />
        // <div key={label.id} className='lable-chip flex ai-center jc-between'>
        //   <p className="'chips">{label.label}</p>

        //   <button
        //     onClick={() => removeLabelDispatch(label.id)}
        //     className='chip-btn btn-icon flex ai-center'>
        //     <img src={Remove} alt='remove-label' />
        //   </button>
        // </div>
      ))}
    </div>
  );
};
