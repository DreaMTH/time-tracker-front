import {
  Button, Checkbox, FilledInput,
  FormControl, FormControlLabel, FormGroup, FormHelperText,
  InputLabel,
  Modal, Typography, Link
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from 'react';
import { InfoOutlined } from "@mui/icons-material";


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
  gap: 2
};

interface Props {
  isOpen: boolean,
  setOpenState: Dispatch<SetStateAction<boolean>>
}

export const ModalRegistrationForm = ({ isOpen, setOpenState }: Props) => {
  const [name, setName] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [hasError, setError] = useState<boolean>(false);
  const handleFormSubmit = async () => {
    if (login.length < 6 || password.length < 8) {
      return setError(true);
    }
    if (password !== confirmPassword) {
      return setError(true);
    }
    console.log({ login, password });
    setOpenState(false);
  }
  return (
    <>
      <Modal open={ isOpen } onClose={ () => setOpenState(false) }>
        <FormGroup sx={ style }>
          <FormControl error={ hasError }>
            <InputLabel
              sx={ {
                color: 'primary.light',
                textShadow: '1px 1px 1px #123455'
              } }
              htmlFor="name-input">Name</InputLabel>
            <FilledInput
              sx={ {
                color: 'primary.light',
                textShadow: '1px 1px 1px #123455'
              } }
              type={ 'text' } id="name-input"
              aria-describedby="name-helper-text"
              value={ name }
              onChange={ (e) => setName(e.target.value) }/>
          </FormControl>
          <FormControl error={ hasError }>
            <InputLabel
              sx={ {
                color: 'primary.light',
                textShadow: '1px 1px 1px #123455'
              } }
              htmlFor="email-input">Login</InputLabel>
            <FilledInput
              sx={ {
                color: 'primary.light',
                textShadow: '1px 1px 1px #123455'
              } }
              type={ 'email' } id="email-input"
              aria-describedby="email-helper-text"
              value={ login }
              onChange={ (e) => setLogin(e.target.value) }/>
          </FormControl>
          <FormControl error={ hasError }>
            <InputLabel sx={ {
              color: 'primary.light',
              textShadow: '1px 1px 1px #123455'
            } } htmlFor="password-input">Password</InputLabel>
            <FilledInput sx={ {
              color: 'primary.light',
              textShadow: '1px 1px 1px #123455'
            } } type={ 'password' } id="password-input"
                         aria-describedby="password-helper-text"
                         value={ password }
                         onChange={ (e) => setPassword(e.target.value) }/>
          </FormControl>
          <FormControl error={ hasError }>
            <InputLabel sx={ {
              color: 'primary.light',
              textShadow: '1px 1px 1px #123455'
            } } htmlFor="confirm-password-input">Confirm password</InputLabel>
            <FilledInput sx={ {
              color: 'primary.light',
              textShadow: '1px 1px 1px #123455'
            } } type={ 'password' } id="confirm-password-input"
                         aria-describedby="confirm-password-helper-text"
                         value={ confirmPassword }
                         onChange={ (e) => setConfirmPassword(
                           e.target.value) }/>
          </FormControl>
          <FormControlLabel control={ <Checkbox/> }
                            label={ <Typography>Agree with <Link href={ '#' }
                                                                 underline={ 'hover' }>privacy
                              policy</Link></Typography> }/>

          { hasError &&
              <FormHelperText error
                              sx={ { fontSize: 18 } }><InfoOutlined/>&nbsp;Fields
                  cannot be empty</FormHelperText> }
          <Button variant={ 'contained' } type={ 'submit' }
                  onClick={ handleFormSubmit }>Submit</Button>
        </FormGroup>
      </Modal>
    </>
  )
};