import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">Main Application</div>
    </ThemeProvider>
  );
}

export default App;
