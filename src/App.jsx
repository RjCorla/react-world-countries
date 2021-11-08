import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { lightTheme, darkTheme, GlobalStyle } from './styles/theme';
import Header from './components/Header'
import Countries from './components/Countries'
import Details from './components/Details'

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header isDark={isDark} setIsDark={setIsDark} />

        <Switch>
          <Route path='/' exact component={Countries} />
          <Route path='/:country' component={Details} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
