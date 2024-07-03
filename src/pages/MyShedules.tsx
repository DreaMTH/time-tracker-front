import { Box, Button, Paper, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { ScheduleItem } from "../components/scheduleItem.tsx";

export const MySchedules = () => {
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
        <ScheduleItem task={'123'} abandonValue={true} isResultFixed={true}/>
        <Box padding={ 3 }>
          <Box>
            <TextField sx={ { input: { color: 'primary.light' } } }
                       variant={ 'filled' }
                       label={ '' }/>
            <Button size={ 'large' } sx={ {
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