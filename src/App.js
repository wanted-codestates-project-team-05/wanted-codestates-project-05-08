import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/List';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
