import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography
} from '@mui/material';
import { Dispatch, SetStateAction } from "react";
import { ScheduleRecord } from "../interfaces/ScheduleInterfaces.ts";

interface Props {
  isOpen: boolean;
  setOpenState: Dispatch<SetStateAction<boolean>>;
  data: ScheduleRecord[];
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 400,
  bgcolor: '#242424',//'background.paper',
  border: '2px solid #000',
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
  gap: 2,
};
export const PostScheduleModal = ({ isOpen, setOpenState, data }: Props) => {
  return (
    <>
      <Modal sx={ style } open={ isOpen } onClose={ () => setOpenState(false) }>
        <Container sx={ { display: 'flex', flexDirection: 'column' } }>
          <Typography textAlign={ 'center' }>Name your task list before
            saving:</Typography>
          <TextField fullWidth sx={ {
            input: {
              color: 'primary.light',
              textAlign: 'center'
            }
          } }
                     variant={ 'standard' }/>
          <Typography textAlign={ 'center' }>(Optional*) Give a description to
            your task
            set:</Typography>
          <TextField rows={ 5 } multiline
                     inputProps={ { style: { color: '#bc9ffe' } } }
                     fullWidth/>
          <br/>
          <Box display={ 'flex' }>
            <Button onClick={ () => console.log(data, 'is saved') }>Save task
              set</Button>
            <Button onClick={ () => console.log(data, 'is published') }>Save
              task set and publish</Button>
          </Box>
        </Container>
      </Modal>
    </>
  )
}