import React from "react";
import { Remove } from "../../assets";
import "./chip.css";

export const Chip = ({ label, dispatch, id, chipStyle }) => {
  return (
    <div className='lable-chip flex ai-center jc-between'>
      <p className={chipStyle ? chipStyle : "chips"}>{label}</p>

      {dispatch && (
        <button
          onClick={() => dispatch(id)}
          className='chip-btn btn-icon flex ai-center'>
          <img src={Remove} alt='remove-label' />
        </button>
      )}
    </div>
  );
};
