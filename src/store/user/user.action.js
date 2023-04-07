import { createAction } from "../../utils/reducer/reducer.utils";
import { ACTIONS } from "./user.type";
export const setCurrentUser = (user) =>
  createAction(ACTIONS.SET_CURRENT_USER, user);

export const checkUserSession = () => createAction(ACTIONS.CHECK_USER_SESSION);
export const googleSignInStart = () =>
  createAction(ACTIONS.GOOGLE_SIGN_IN_START);
export const emailSignInStart = (email, password) =>
  createAction(ACTIONS.EMAIL_SIGN_IN_START, { email, password });
export const signInSuccess = (user) =>
  createAction(ACTIONS.SIGN_IN_SUCCESS, user);
export const signInFailed = (error) =>
  createAction(ACTIONS.SIGN_IN_FAILED, error);
