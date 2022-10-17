import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCESS,
  SIGNUP_FAILURE,
} from "./actionTypes";

import {
  LoginPayload,
  SignupPayload,
  LoginRequest,
  LoginSuccess,
  LoginSuccessPayload,
  LoginFailure,
  LoginFailurePayload,
  SignupRequest,
  SignupSuccess,
  SignupSuccessPayload,
  SignupFailure,
  SignupFailurePayload,
} from "./types";

export const loginRequest = (payload: LoginPayload): LoginRequest => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => ({
  type: LOGIN_FAILURE,
  payload,
});

export const signUpRequest = (payload: SignupPayload): SignupRequest => ({
  type: SIGNUP_REQUEST,
  payload,
});

export const signupSuccess = (
  payload: SignupSuccessPayload
): SignupSuccess => ({
  type: SIGNUP_SUCESS,
  payload,
});

export const signupFailure = (
  payload: SignupFailurePayload
): SignupFailure => ({
  type: SIGNUP_FAILURE,
  payload,
});
