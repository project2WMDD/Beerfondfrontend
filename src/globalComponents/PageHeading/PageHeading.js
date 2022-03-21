import React from 'react';
import { color2, color3 } from '../../constants';

function pageHeading({ children }) {
  return <h2 style={signupHeading}>{children}</h2>;
}

export default pageHeading;

const signupHeading = {
  display: 'grid',
  /* background-color: #F7D04B; */
  fontFamily: 'Poppins',
  fontStyle: 'bold',
  fontSize: '26px',
  // justifyContent: 'center',
  color: color2,
  margin: '20px'
};
