import { createSelector } from "reselect";
import { AuthState } from "../rootReducers";

const getPending = (state: AuthState) => state.authReducer.pending;

const getToken = (state: AuthState) => state.authReducer.token;

const getError = (state: AuthState) => state.authReducer.error;

export const getAuthSelector = createSelector(getToken, (token) => token);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
