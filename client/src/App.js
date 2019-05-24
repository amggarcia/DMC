import React from 'react';
import MenuBar from './Components/Layout/MenuBar';
import ActivityManager from './Components/ActivityManager/ActivityManager';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <MenuBar></MenuBar>
        <ActivityManager></ActivityManager>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
