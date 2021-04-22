import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import gsap, { Power3 } from 'gsap/gsap-core';
import Styles from '../styles/Styles';
import Footer from './Footer';
import { nameInfo } from '../styles/styles.css';
import { INCREMENT, ADD, REMOVE, RANDOM } from '../redux/actions';
import randomColorGenerator from './functions/randomColor';

const Header = () => {
  const classes = Styles();
  const fruitCount = useSelector((state) => state.first.fruitCount);
  const fruits = useSelector((state) => state.second.fruits);
  const backGround = useSelector((state) => state.background.background);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [count, setCount] = useState(1);

  function addFruit() {
    dispatch({ type: ADD, id: count, val: inputRef.current.value });
    setCount(count + 1);
  }

  function remove(id) {
    dispatch({ type: REMOVE, id });
  }
  const backgroundChanger = () => {
    const r = randomColorGenerator();
    dispatch({ type: RANDOM, random: r });
  };
  useEffect(() => {
    console.log('Header is rendered');
  }, []);
  useEffect(() => {
    gsap.to(document.body, {
      background: backGround,
      duration: 1,
      ease: Power3.easeOut,
    });
  }, [backGround]);
  return (
    <div className={nameInfo}>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <h1 className="text-white">{fruitCount}</h1>
        <Button
          type="button"
          variant="light"
          onClick={() => dispatch({ type: INCREMENT })}
        >
          Parent button
        </Button>
        <div>
          <Button type="button" variant="light" onClick={backgroundChanger}>
            Background
          </Button>
        </div>
      </div>

      <div>
        <ul className="list-group">
          {fruits.map((fruit) => (
            <li key={fruit.id} className="list-group-item">
              <span>{fruit.val}</span>
              <Button
                type="button"
                variant="danger"
                onClick={() => remove(fruit.id)}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
        <input type="text" className="input-group-item" ref={inputRef} />
        <Button type="button" variant="primary" onClick={() => addFruit()}>
          Add Fruit
        </Button>
      </div>

      <Footer />
    </div>
  );
};
export default Header;
