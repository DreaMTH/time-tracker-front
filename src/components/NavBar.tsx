import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useState } from "react";
import { ModalLoginForm } from "./loginForm.tsx";
import { ModalRegistrationForm } from "./registrationForm.tsx";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const [isLogged, setLogged] = useState<boolean>(false);
  const [isLoginOpen, setLoginOpen] = useState<boolean>(false);
  const [isRegistrationOpen, setRegistrationOpen] = useState<boolean>(false);
  const location = useLocation();
  const pageTitle = location.pathname.slice(1) || 'Home';
  document.title = pageTitle[0].toUpperCase() + pageTitle.substring(1);
  return (
    <>
      <Box sx={ { flexGrow: 1 } }>
        <AppBar position={ 'fixed' } sx={ { top: 0, flexWrap: 'wrap' } }
                elevation={ 10 }>
          <Toolbar sx={ { flexWrap: 'wrap' } }>
            <IconButton size={ 'medium' } edge={ 'start' } color={ 'inherit' }
                        aria-label={ 'menu' } sx={ { mr: 2 } }
                        onClick={ () => setLogged(!isLogged) }>
              <MenuIcon/>
            </IconButton>
            <Box sx={ { display: 'flex', flexGrow: 1, gap: 2 } }>
              <Link to={ '/' }>
                <Button color={ 'primary' }
                        disabled={ location.pathname === '/' }
                        variant={ 'contained' }>Home</Button>
              </Link>
              <Link to={ '/schedules/mine' }>
                <Button color={ 'primary' }
                        disabled={ location.pathname === '/schedules/mine' }
                        variant={ 'contained' }>My
                  schedules</Button>
              </Link>
              <Link to={ '/schedules/new' }>
                <Button color={ 'primary' }
                        disabled={ location.pathname === '/schedules/new' }
                        variant={ 'contained' }>New
                  Schedule</Button>
              </Link>
            </Box>
            { !isLogged &&
                <Box sx={ { gap: 2 } } display={ 'flex' }>
                    <Button size={ 'medium' } variant={ 'contained' }
                            color={ 'primary' }
                            onClick={ () => setLoginOpen(true) }>Sign
                        In&nbsp;<LoginOutlinedIcon
                            fontSize={ 'small' }/></Button>
                    <Button size={ 'medium' } variant={ 'contained' }
                            color={ 'primary' }
                            onClick={ () => setRegistrationOpen(true) }>Sign
                        Up&nbsp;<LoginOutlinedIcon
                            fontSize={ 'small' }/></Button>
                </Box>
            }
            { isLogged &&
                <Box>
                    <Button size={ 'medium' } variant={ 'contained' }
                            color={ 'primary' }>Log Out&nbsp;
                        <LoginOutlinedIcon
                            fontSize={ 'small' }/></Button>
                </Box>
            }
          </Toolbar>
        </AppBar>
      </Box>
      <ModalLoginForm isOpen={ isLoginOpen } setOpenState={ setLoginOpen }/>
      <ModalRegistrationForm isOpen={ isRegistrationOpen }
                             setOpenState={ setRegistrationOpen }/>
    </>
  )
}