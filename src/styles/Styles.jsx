import React from 'react';
import { createUseStyles } from 'react-jss';

const Styles = createUseStyles({
  div: {
    background: 'red',
  },
  margarita: {
    height: '100vh',
    overflow: 'hidden',
  },
  openEye: {
    fill: 'none',
    stroke: '#000',
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 5,
    display: 'none',
  },
  word: {
    fill: 'none',
    stroke: '#000000',
    strokeWidth: 6,
    strokeMiterlimit: 10,
  },
});

export default Styles;
