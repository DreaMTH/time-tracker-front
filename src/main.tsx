import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@mui/material";
import { mainTheme } from "./themes/MainTheme.ts";
import { NavBar } from "./components/NavBar.tsx";
import { Provider } from 'react-redux';
import { store } from "./store/store.ts";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateSchedule } from "./pages/CreateSchedule.tsx";
import { MySchedules } from "./pages/MySchedules.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <ThemeProvider theme={ mainTheme }>
          <NavBar/>
          <Routes>
            <Route path={ '/' } Component={ App }/>
            <Route path={ '/schedules/new' } Component={ CreateSchedule }/>
            <Route path={ '/schedules/mine' } Component={ MySchedules }/>
          </Routes>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
