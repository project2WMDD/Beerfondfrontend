import React from 'react';
import { color1 } from '../../constants';

export default function PictureSide(props) {
  return (
    <div style={style}>
      <img style={imgStyle} src={props.src} alt='' />
    </div>
  );
}

const style = {
  backgroundColor: color1,
  height: '100%'
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};
