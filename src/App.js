import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/List';
import { ToastList } from './components/ToastList';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ToastList />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
