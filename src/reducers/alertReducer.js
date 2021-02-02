/* eslint-disable import/no-anonymous-default-export */
import { HIDE_ALERT, SHOW_ALERT } from '../types/types';

const initialState = {
  alert: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };

    case HIDE_ALERT:
      return {
        ...state,
        alert: null,
      };

    default:
      break;
  }
}
