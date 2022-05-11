/** @format */

import React from "react";
import { useNote } from "../../context";
import { Label } from "./Label/Label";
import { uniqueLabels } from "../../utils";
import "./labels.css";

export const Labels = () => {
  const {
    allNotes: { notes },
  } = useNote();

  const labels = uniqueLabels(notes);

  return (
    <div className='content-wrapper'>
      <div className='note-card-wrapper'>
        <div className='note-heading'>
          <h1>Labels</h1>
        </div>
        <div className='label-container flex flex-col flex-wrap flex-gap'>
          {labels.length > 0 ? (
            labels.map((label) => <Label key={label} label={label} />)
          ) : (
            <h1>You dont have any Labels</h1>
          )}
        </div>
      </div>
    </div>
  );
};
