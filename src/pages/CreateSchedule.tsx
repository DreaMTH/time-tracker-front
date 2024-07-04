import { Box, Button, Paper, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { ScheduleList } from "../components/scheduleList.tsx";
import { KeyboardEvent, useState } from "react";
import { ScheduleRecord } from "../interfaces/ScheduleInterfaces.ts";
import { PostScheduleModal } from "../components/PostScheduleModal.tsx";

export const CreateSchedule = () => {
  const [arrayItem, setArrayItem] = useState<string>('');
  const [scheduleArray, setArray] = useState<ScheduleRecord[]>([]);
  const [errorRecord, setErrorRecord] = useState<boolean>(false);
  const [postModalOpen, setPostModalState] = useState<boolean>(false);
  const handleNewRecord = () => {
    if (arrayItem.length <= 0) {
      return setErrorRecord(true);
    }
    setArray(
      prevState => [...prevState, {
        taskName: arrayItem,
        isResultFixed: false
      }]);
    setErrorRecord(false);
  }
  const enterKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      return handleNewRecord();
    }
  }
  return (
    <>
      <Paper sx={ {
        bgcolor: '#242424',
        color: 'primary.light',
        marginTop: 7,
        paddingY: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      } } elevation={ 5 }>
        <ScheduleList data={ scheduleArray }/>
        <Box padding={ 3 }>
          <Box>
            <TextField helperText={ errorRecord && 'Task name cannot be empty' }
                       error={ errorRecord }
                       sx={ { input: { color: 'primary.light' } } }
                       variant={ 'filled' }
                       value={ arrayItem }
                       label={ '' }
                       onChange={ (e) => setArrayItem(e.target.value) }
                       onKeyDown={ enterKeyPress }/>
            <Button size={ 'large' } onClick={ handleNewRecord } sx={ {
              display: 'inline-block',
              margin: 'auto',
              maxHeight: 60,
              height: 60,
              paddingTop: 1.5
            } }><Add/></Button>
          </Box>
        </Box>
        <Button size={ 'large' }
                variant={ 'contained' }
                sx={ { margin: 'auto', width: '100%', maxWidth: 200 } }
                onClick={ () => setPostModalState(true) }>Create
          schedule</Button>
      </Paper>
      <PostScheduleModal isOpen={ postModalOpen }
                         setOpenState={ setPostModalState } data={scheduleArray}/>
    </>
  );
}