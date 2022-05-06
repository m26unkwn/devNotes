import React from "react";
import { useState } from "react";
import { Bookmark, Color, Add } from "../../assets";
import { useNote } from "../../context";
import { useHandler } from "../../hooks/use-handler";
import { Description } from "./Editor/Description";
import { Title } from "./Editor/Title";
import { AddLabel } from "./Label/AddLabel";
import { Lables } from "./Label/Lables";
import "./noteEditor.css";
import { Pallete } from "./Pallete/Pallete";
import { Priority } from "./Priority/Priority";

export const NoteEditor = () => {
  const [pallete, setPallete] = useState(false);
  const [lable, setLable] = useState(false);
  const [handlers] = useHandler();
  const {
    noteState: { color },
  } = useNote();

  const toggle = (setState, removeState) => {
    removeState(false);
    setState((prev) => !prev);
  };

  const addToNotes = () => {
    handlers.addNote();
    setLable(false);
    setPallete(false);
  };

  return (
    <div style={{ background: color }} className='note-editor card-container'>
      <Title />
      <Description />
      <Lables />
      <div className='note-action-container flex jc-between ai-center'>
        <div className='note-btn flex flex-gap'>
          <div
            onClick={(e) => toggle(setPallete, setLable)}
            className='btn btn-icon'>
            <img src={Color} alt='color-pallete' />
          </div>
          <div
            onClick={(e) => toggle(setLable, setPallete)}
            className='btn btn-icon'>
            <img src={Bookmark} alt='color-pallete' />
          </div>
          <Priority />
        </div>
        <div onClick={addToNotes} className='note-add-btn  btn btn-icon'>
          <img src={Add} alt='add-note' />
        </div>
      </div>
      {pallete && <Pallete setPallete={setPallete} />}
      {lable && <AddLabel />}
    </div>
  );
};
