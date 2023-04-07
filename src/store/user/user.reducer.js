import { ACTIONS } from "./user.type";
const INITAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};
export const userReducer = (state = INITAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case ACTIONS.SIGN_IN_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
