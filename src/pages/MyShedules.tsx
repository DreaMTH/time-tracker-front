import { Box, Button, Paper, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

export const MySchedules = () => {

  return (
    <>
      <Paper sx={ {
        bgcolor: '#242424',
        color: 'primary.light',
        marginTop: 7,
        paddingY: 2,
        display: 'flex',
        justifyContent: 'center'
      } } elevation={ 5 }>
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