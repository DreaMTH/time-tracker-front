import { Box, Button, Paper, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { ScheduleList } from "../components/scheduleList.tsx";
import { KeyboardEvent, useState } from "react";
import { ScheduleRecord } from "../interfaces/ScheduleInterfaces.ts";

export const CreateSchedule = () => {
  const [arrayItem, setArrayItem] = useState<string>('');
  const [scheduleArray, setArray] = useState<ScheduleRecord[]>([]);
  const handleNewRecord = () => setArray(
    prevState => [...prevState, {
      taskName: arrayItem,
      isResultFixed: false
    }]);
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
            <TextField sx={ { input: { color: 'primary.light' } } }
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
      </Paper>
    </>
  );
}