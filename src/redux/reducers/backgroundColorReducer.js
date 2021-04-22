import { RANDOM, CURRENT } from '../actions';

const initialState = {
  background: '#222222',
};

export default function reducer1(state = initialState, action) {
  switch (action.type) {
    case RANDOM:
      return {
        ...state,
        background: action.random,
      };
    case CURRENT:
      return {
        ...state,
        background: action.color,
      };
    default:
      return state;
  }
}
