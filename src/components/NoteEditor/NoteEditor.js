import React from "react";
import { useState } from "react";
import { Color, Add } from "../../assets";
import { ReactComponent as LabelIcon } from "../../assets/Bookmark.svg";
import { Description } from "./Editor/Description";
import { Title } from "./Editor/Title";
import { AddLabel } from "./Label/AddLabel";
import { Lables } from "./Label/Lables";
import "./noteEditor.css";
import { Pallete } from "./Pallete/Pallete";
import { Priority } from "./Priority/Priority";

export const NoteEditor = ({ addNote, noteState, noteDispatch }) => {
  const [pallete, setPallete] = useState(false);
  const [lable, setLable] = useState(false);
  const { color, title, description, lables, pin } = noteState;

  const toggle = (setState, toggleState) => {
    toggleState(false);
    setState((prev) => !prev);
  };

  const addToNotes = () => {
    if (title.trim(" ").length > 0 || description.trim(" ").length > 0) {
      addNote();
    } else {
      alert("Enter Note");
    }
    setLable(false);
    setPallete(false);
  };

  return (
    <div style={{ background: color }} className='note-editor card-container'>
      <Title title={title} noteDispatch={noteDispatch} pin={pin} />
      <Description description={description} noteDispatch={noteDispatch} />
      <Lables lables={lables} noteDispatch={noteDispatch} />
      <div className='note-action-container flex jc-between ai-center'>
        <div className='note-btn flex flex-gap'>
          <div
            title='Add Color'
            onClick={(e) => toggle(setPallete, setLable)}
            className='btn btn-icon'>
            <img src={Color} alt='color-pallete' />
          </div>
          <div
            title='Add Label'
            onClick={(e) => toggle(setLable, setPallete)}
            className='btn btn-icon'>
            <LabelIcon width='30' height='30' fill='black' />
          </div>
          <Priority noteDispatch={noteDispatch} />
        </div>
        <div
          title='Add Note'
          onClick={addToNotes}
          className='note-add-btn  btn btn-icon'>
          <img src={Add} alt='add-note' />
        </div>
      </div>
      {pallete && <Pallete noteDispatch={noteDispatch} />}
      {lable && <AddLabel noteDispatch={noteDispatch} />}
    </div>
  );
};
