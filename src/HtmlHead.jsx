import React from 'react';
import { Helmet } from 'react-helmet';
import logo from './images/fb-logo.png';

const HtmlHead = () => (
  <Helmet>
    <link rel="shortcut icon" href={logo} type="image/x-icon" />
  </Helmet>
);
export default HtmlHead;
