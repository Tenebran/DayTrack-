import React, { ChangeEvent, FC, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Button, ButtonGroup, IconButton, styled, TextField } from '@mui/material';

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

  const userMessage = inputError
    ? 'Your tottle is too empty'
    : title.length < maxLengthUserMeaasge
      ? null
      : 'Your title is to long';

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
    <ButtonGroup>
      <TextField
        variant="outlined"
        size="small"
        label="Please, enter title"
        className={inputError ? 'input-error' : undefined}
        autoFocus
        value={title}
        onChange={handlerInputChange}
        onKeyDown={(event) => {
          event.key === 'Enter' && handlerAddItem();
        }}
        error={inputError}
        helperText={userMessage}
      />

      <Button
        size={'small'}
        variant="contained"
        color="primary"
        onClick={() => handlerAddItem()}
        disabled={!title.length || title.length >= maxLengthUserMeaasge}
        endIcon={<SendIcon />}>
        ADD
      </Button>
    </ButtonGroup>
  );
};
