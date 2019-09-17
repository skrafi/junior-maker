import React from 'react';
import './App.css';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { messages } from './assets/i18n/messages';
import { theme } from './assets/styles/theme';
import { Dashboard } from './dashboard/Dashboard.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router';
import { Header } from './header/Header.jsx'
import { Learn } from './learn/Learn.jsx'
import { Tests } from './tests/tests';
import { Admin } from './admin/admin';
import { Checker } from './checker/checker';
import { PageNotFound } from './PageNotFound/PageNotFound.jsx';

const MainStyled = styled.div`
  color: ${({ theme }) => theme.colors.primary}
`;

function App() {
  return (
    <IntlProvider locale="en" messages={messages}>
      <ThemeProvider theme={theme}>
        <Router>
          <MainStyled>

            <FormattedMessage id="welcome" />

            <Header />

            <Switch>
              <Route exact path="/" render={() => (
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
