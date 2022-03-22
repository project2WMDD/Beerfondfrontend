import React from 'react';
import { color2, color3 } from '../../constants';

function PageHeading({...props}) {
  return <h2 style={{...signupHeading, ...props.style}}>{props.children}</h2>;
}

export default PageHeading;

const signupHeading = {
  display: 'grid',
  /* background-color: #F7D04B; */
  fontFamily: 'Poppins',
  fontStyle: 'bold',
  fontSize: '26px',
  // justifyContent: 'center',
  color: color2,
};
