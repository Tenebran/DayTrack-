import React, { ChangeEvent, FC, useState } from 'react';

type EditebleSpanType = {
  title: string;
  spanClasses?: string;
  inputClasses?: string;
  changeTitleHandler: (title: string) => void;
};

export const EditebleSpan: FC<EditebleSpanType> = ({
  title,
  spanClasses,
  inputClasses,
  changeTitleHandler,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [localTitle, setLocalTitle] = useState<string>(title);

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
        <input
          value={localTitle}
          onChange={changeInputHandler}
          autoFocus
          onBlur={offEditMode}
        ></input>
      )}
    </>
  );
};
