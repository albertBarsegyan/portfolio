import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  fruitCount: 0,
};

export default function reducer1(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        fruitCount: state.fruitCount + 1,
      };
    case DECREMENT:
      return {
        ...state,
        fruitCount: state.fruitCount - 1,
      };
    default:
      return state;
  }
}
