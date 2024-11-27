import { TextField } from '@mui/material';
import React, { ChangeEvent, FC, useState } from 'react';

type EditebleSpanType = {
  title: string;
  spanClasses?: string;
  changeTitleHandler: (title: string) => void;
};

export const EditebleSpan = ({
  title,
  spanClasses,
  changeTitleHandler,
}: EditebleSpanType): JSX.Element => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [localTitle, setLocalTitle] = useState<string>(title);

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const trimTaskTitle = event.target.value.trim();

    if (trimTaskTitle || event.target.value.length === 0) {
      trimTaskTitle.length <= 15 && setLocalTitle(event.target.value);
    }
    setLocalTitle(event.target.value);
  };

  const onEditMode = () => {
    setEditMode(!editMode);
  };

  const offEditMode = () => {
    setEditMode(!editMode);
    changeTitleHandler(localTitle);
  };

  return (
    <>
      {!editMode ? (
        <span className={spanClasses} onDoubleClick={onEditMode}>
          {title}
        </span>
      ) : (
        <TextField
          variant="standard"
          size="small"
          value={localTitle}
          onChange={changeInputHandler}
          autoFocus
          onBlur={offEditMode}
        />
      )}
    </>
  );
};
