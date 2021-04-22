import { ADD, REMOVE } from '../actions';

const initialState = {
  fruits: [],
};

export default function reducer2(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        fruits: [...state.fruits, { id: action.id, val: action.val }],
      };
    case REMOVE:
      return {
        ...state,
        fruits: state.fruits.filter((fruit) => fruit.id !== action.id),
      };
    default:
      return state;
  }
}
