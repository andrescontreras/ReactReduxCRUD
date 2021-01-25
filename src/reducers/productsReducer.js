import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESS,
} from '../types/types';

const initalState = {
  products: [],
  error: false,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      break;

    case ADD_PRODUCT_SUCCESS:
      break;

    case ADD_PRODUCT_ERROR:
      break;

    default:
      return state;
  }
}
