/** @format */

// start compoents
import Navbar from "./components/Navbar";
// End compoents

// start css files
import "./Css fills/style.css";
import "./App.css";
// End css files

//mui
import React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './Routs';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
