import { HIDE_ALERT, SHOW_ALERT } from '../types/types';

export function showAlert(alert) {
  return (dispatch) => {
    dispatch(createAlert());
  };
}

const createAlert = (alert) => ({
  type: SHOW_ALERT,
  payload: alert,
});

export function hideAlertAction() {
  return (dispatch) => {
    dispatch(hideAlert());
  };
}

const hideAlert = () => ({
  type: HIDE_ALERT,
});
