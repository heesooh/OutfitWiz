import './index.css'
import React from 'react'
import axios from "axios";
import App from './App.tsx'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const theme = createTheme(
  {
    typography:{
      fontFamily: "gill sans, san-serif", 
      allVariants: {
        color: "black"
      },
    }
  }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Toaster position="top-center"/>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
)
