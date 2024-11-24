import React, { ChangeEvent, FC, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Button, ButtonGroup, styled, TextField } from '@mui/material';

type AddItemFormType = {
  todoListsID?: string;
  maxLengthUserMeaasge: number;
  addItem: (title: string) => void;
  taskID?: string;
  disabled?: boolean;
};

const StyledButtonn = styled(Button)({
  maxHeight: '39.99px',
});

export const AddItemForm: FC<AddItemFormType> = ({
  addItem,
  maxLengthUserMeaasge,
  taskID,
  disabled,
  todoListsID,
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
        autoFocus={!!taskID}
        value={title}
        onChange={handlerInputChange}
        onKeyDown={(event) => {
          event.key === 'Enter' && handlerAddItem();
        }}
        error={!!userMessage}
        helperText={userMessage}
        disabled={disabled}
      />

      <StyledButtonn
        size={'small'}
        variant="contained"
        color="primary"
        onClick={() => handlerAddItem()}
        disabled={!title.length || title.length >= maxLengthUserMeaasge || disabled}
        endIcon={<SendIcon />}>
        ADD
      </StyledButtonn>
    </ButtonGroup>
  );
};
