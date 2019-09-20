import React from 'react';
import './App.css';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import { IntlProvider } from 'react-intl';
import { messages } from './assets/i18n/messages';
import { theme } from './assets/styles/theme';
import { Dashboard } from './dashboard/Dashboard.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Redirect } from 'react-router';
import { Header } from './header/Header.jsx'
import { Learn } from './learn/Learn.jsx'
import { Tests } from './tests/tests';
import { Admin } from './admin/admin';
import { Checker } from './checker/checker';
import { PageNotFound } from './PageNotFound/PageNotFound.jsx';

const MainStyled = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 65px;
`;

function App() {
  return (
    <IntlProvider locale="en" messages={messages}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <MainStyled>
            <Switch>
              <Route exact path="/" render={() => (
                <Redirect to="/dashboard" />
              )} />

              <Route exact path="/dashboard" render={() => (
                <Dashboard />
              )} />

              <Route path="/learn" render={() => (
                <Learn />
              )} />

              <Route path="/tests" render={() => (
                <Tests />
              )} />
              <Route path="/checker" render={() => (
                <Checker />
              )} />

              <Route path="/admin" render={() => (
                <Admin />
              )} />

              <Route render={() => (
                <PageNotFound />
              )} />

            </Switch>
          </MainStyled>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
}


export default App;
