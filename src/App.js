import React from 'react';
import Header from './header.jsx';
import SignIn from './components/Signin';
import SignUp from './components/signup';
import Footer from './components/footer';
import { Box } from '@material-ui/core'


function App() {
  return (
    <div >
      <Header />
      {/* <SignIn /> */}
      <SignUp />
      <Box mt={8}>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
