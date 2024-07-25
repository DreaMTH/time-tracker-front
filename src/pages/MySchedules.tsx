import { useState, useEffect } from "react";
import { ScheduleRecord } from "../interfaces/ScheduleInterfaces.ts";
import { ScheduleList } from "../components/scheduleList.tsx";
import { Container, Paper, Typography } from "@mui/material";

const splitScreens = {
  backgroundColor: '#242424',
  height: '100%',
  width: '50%',
  position: 'fixed',
  boxShadow: '1px 1px 5px #123455'
}
export const MySchedules = () => {
  const [data, setData] = useState<ScheduleRecord[]>([]);
  useEffect(() => {
    setData([
      {
        taskName: 'Test task 1',
        isTaskDone: false,
        isTaskAbandon: false,
        isResultFixed: false,
      },
      {
        taskName: 'Test task 2',
        isTaskDone: true,
        isTaskAbandon: false,
        isResultFixed: false,
      },
      {
        taskName: 'Test task 3',
        isTaskDone: false,
        isTaskAbandon: true,
        isResultFixed: true,
      },
    ])
  }, []);
  return (
    <>
      <Container sx={ { marginTop: 10 } }>
        <Typography color={ 'primary' }
                    sx={ { textShadow: '1px 1px 10px #123455' } }
                    textAlign={ 'center' } variant={ 'h3' }>My
          schedules</Typography>
        <Paper
          sx={ { ...splitScreens, left: 0 } }>
          <Typography color={ 'primary' }
                      sx={ { textShadow: '1px 1px 10px #123455' } }
                      textAlign={ 'center' }
                      variant={ 'h4' }>Active</Typography>
          <ScheduleList data={ data }/>
        </Paper>
        <Paper
          sx={ { ...splitScreens, right: 0 } }>
          <Typography color={ 'primary' }
                      sx={ { textShadow: '1px 1px 10px #123455' } }
                      textAlign={ 'center' }
                      variant={ 'h4' }>History</Typography>
          <ScheduleList data={ data }/>
        </Paper>
      </Container>
    </>
  );
}