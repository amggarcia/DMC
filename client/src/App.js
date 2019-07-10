import React from 'react';
import MenuBar from './Components/Layout/MenuBar';
import ActivityManager from './Components/ActivityManager/ActivityManager';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline></CssBaseline>
          <MenuBar></MenuBar>
          <ActivityManager></ActivityManager>
        </MuiThemeProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
