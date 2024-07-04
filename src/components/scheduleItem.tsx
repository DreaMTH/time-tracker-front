import { Box, Typography, Checkbox, Container } from "@mui/material";
import CheckCircleOutlineOutlinedIcon
  from '@mui/icons-material/CheckCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon
  from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { ChangeEvent, useState } from "react";

interface Props {
  task: string,
  doneValue?: boolean,
  abandonValue?: boolean,
  isResultFixed: boolean,
}

export const ScheduleItem = ({
                               task,
                               doneValue = false,
                               abandonValue = false,
                               isResultFixed
                             }: Props) => {
  const [taskDoneCheck, setTaskDoneCheck] = useState<boolean>(
    doneValue || false);
  const [taskAbandonCheck, setTaskAbandonCheck] = useState<boolean>(
    abandonValue);
  const handleDoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isResultFixed) {
      return;
    }
    setTaskDoneCheck(event.target.checked);
    setTaskAbandonCheck(!event.target.checked);
  };
  const handleAbandonChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isResultFixed) {
      return;
    }
    setTaskAbandonCheck(event.target.checked);
    setTaskDoneCheck(!event.target.checked);
  };
  return (
    <>
      <Container sx={ {
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        flexWrap: 'wrap',
        alignItems: 'center',
        maxWidth: 'fit-content',
        margin: 'auto'
      } }>
        <Box margin={ 0 } padding={ 0 } flexGrow={1} flexWrap={'wrap'}>
          <Checkbox
            size={ 'large' }
            color={ 'primary' }
            checked={ taskDoneCheck }
            onChange={ handleDoneChange }
            inputProps={ { 'aria-label': 'controlled' } }
            icon={ <CheckCircleOutlineOutlinedIcon/> }
            checkedIcon={ <CheckCircleOutlineOutlinedIcon/> }
          />
          <Checkbox
            size={ 'large' }
            color={ 'secondary' }
            checked={ taskAbandonCheck }
            onChange={ handleAbandonChange }
            inputProps={ { 'aria-label': 'controlled' } }
            icon={ <RemoveCircleOutlineOutlinedIcon/> }
            checkedIcon={ <RemoveCircleOutlineOutlinedIcon/> }
          />
        </Box>
        <Box flexGrow={1} flexWrap={'wrap'}>
          <Typography variant={ 'h4' }>
            { task }
          </Typography>
        </Box>
      </Container>
    </>
  );
}