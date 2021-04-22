import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import UfoSvg from './components/Svg/UfoSvg';
import HtmlHead from './HtmlHead';

const App = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 6000);
  }, []);
  return (
    <>
      <HtmlHead />
      {show ? <UfoSvg /> : <Header />}
    </>
  );
};
export default App;
