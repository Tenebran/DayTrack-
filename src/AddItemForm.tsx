import React, { ChangeEvent, FC, useState } from 'react';

type AddItemFormType = {
  todoListsID?: string;
  maxLengthUserMeaasge: number;
  addItem: (title: string) => void;
  handleBlur?: (id: string, idTodolist: string) => void;
  taskID?: string;
};

export const AddItemForm: FC<AddItemFormType> = ({
  todoListsID,
  addItem,
  handleBlur,
  taskID,
  maxLengthUserMeaasge,
}) => {
  const [title, setTitle] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);

  const userMessage = inputError ? (
    <span style={{ color: 'red' }}>Your tottle is too empty</span>
  ) : title.length < maxLengthUserMeaasge ? (
    ''
  ) : (
    <span style={{ color: 'red' }}>Your title is to long</span>
  );

  const handlerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputError && setInputError(false);
    const trimTaskTitle = event.target.value.trim();

    if (trimTaskTitle || event.target.value.length === 0) {
      trimTaskTitle.length <= maxLengthUserMeaasge && setTitle(event.target.value);
    } else {
      setInputError(true);
    }
  };

  const handlerAddItem = () => {
    title.length && addItem(title);

    setTitle('');
  };

  return (
    <>
      <input
        placeholder="Please, enter title"
        className={inputError ? 'input-error' : undefined}
        autoFocus
        value={title}
        // onBlur={() => (handleBlur && taskID ? handleBlur(taskID, todoListsID) : null)}
        onChange={handlerInputChange}
        onKeyDown={event => {
          event.key === 'Enter' && handlerAddItem();
        }}
      />
      <button
        onClick={() => handlerAddItem()}
        disabled={!title.length || title.length >= maxLengthUserMeaasge}
      >
        +
      </button>
      <div>{userMessage}</div>
    </>
  );
};
