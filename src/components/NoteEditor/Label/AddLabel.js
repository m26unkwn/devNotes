import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Add } from "../../../assets";
import "./label.css";
export const AddLabel = ({ noteDispatch }) => {
  const [label, setLabel] = useState({
    id: "",
    label: "",
  });

  const labelHandler = (e) => {
    setLabel({ id: uuid(), label: e.target.value });
  };
  const dispatchLable = (e) => {
    e.preventDefault();
    setLabel({ id: "", label: "" });
    noteDispatch({ type: "ADD_LABEL", label: label });
  };
  return (
    <div className='pallete-container card-container flex-gap'>
      <form className='flex flex-gap' onSubmit={dispatchLable}>
        <div className='input-field label-input'>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='enter label'
            value={label.label}
            onChange={labelHandler}
            required='required'
            autoFocus
            aria-required
          />
        </div>

        <button
          type='submit'
          disabled={!label.label.trim(" ")}
          onClick={dispatchLable}
          className='btn btn-icon'>
          <img src={Add} alt='add-label' />
        </button>
      </form>
    </div>
  );
};
