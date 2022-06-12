import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { theme } from './theme';
import QuestionsScreen from './pages/questions';
import ResultsScreen from './pages/results/results';

import './App.css';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<QuestionsScreen />} />
          <Route path="/results" element={<ResultsScreen />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
