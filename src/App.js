import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sample from './components/Sample';
import theme from './theme';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Sample />
    </ThemeProvider>
  );
}

export default App;
