import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sample from './components/Sample';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import List from './pages/List';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <List /> */}
      <Sample />
    </ThemeProvider>
  );
}

export default App;
