import React from 'react';
import Header from './header.jsx';
import SignIn from './components/Signin';
import SignUp from './components/signup';
import Footer from './components/footer';
import BlueGrey from "@material-ui/core/colors/blueGrey";
import LightGreen from "@material-ui/core/colors/lightGreen";
import { Box, useMediaQuery, createMuiTheme } from '@material-ui/core'
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/styles';

// const useStyle = makeStyles(theme => (
//   console.info('[App.js] theme ====>', theme),
//   {
//     // '@global': {
//     body: {
//       backgroundColor: theme.palette.background.paper,
//     },
//     // },
//   }))

function App() {
  // const themea = useTheme();
  // console.info('[App.js]useTheme theme =====>', themea);
  // const classes = useStyle();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  console.log(prefersDarkMode);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            light: BlueGrey[300],
            main: BlueGrey[500],
            dark: BlueGrey[700]
          },
          secondary: {
            light: LightGreen[300],
            main: LightGreen[500],
            dark: LightGreen[700]
          },
          type: "light"
        }
      }),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme} >
      <Header />
      {/* <SignIn /> */}
      <div className=''>
        <SignUp />
      </div>
      <Box mt={8}>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
