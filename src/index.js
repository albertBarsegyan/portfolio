import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Margarita from './components/Margarita';
import store from './redux/store';
import './styles/main.css';

const ReduxContainer = () => (
  <Provider store={store}>
    {/* <App /> */}
    <Margarita />
  </Provider>
);

reactDOM.render(<ReduxContainer />, document.querySelector('#root'));
