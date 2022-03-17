import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/List';
import { ToastList } from './components/ToastList';
import { useToastState } from './hooks/useToastState';
function App() {
  const handleToast = useToastState();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ToastList />
        <Routes>
          <Route path="/" element={<Home handleToast={handleToast}/>} />
          <Route path="/list" element={<List handleToast={handleToast}/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
