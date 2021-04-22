import React, { useEffect, useReducer } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT } from '../redux/actions';
import Styles from '../styles/Styles';

const Footer = () => {
  // eslint-disable-next-line no-use-before-define
  const [init, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case 'add':
        return state + 1;
      case 'remove':
        return state - 1;
      default:
        throw new Error();
    }
  }
  useEffect(() => {
    console.log('Footer is rendered');
  }, []);
  useEffect(() => {
    console.log('Footer is updated');
  }, [init]);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <h1 className="text-light">{init}</h1>
        <Button
          type="button"
          variant="danger"
          onClick={() => dispatch({ type: 'add' })}
        >
          Child button
        </Button>
      </div>
      <div>
        <h1 className="text-light">Use Dispatcher</h1>
        <Button
          type="button"
          variant="danger"
          onClick={() => dispatch({ type: 'add' })}
        >
          Tester
        </Button>
      </div>
    </div>
  );
};
export default Footer;
