import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCESS,
  SIGNUP_FAILURE,
} from "./actionTypes";

export interface IAuth {
  token: string;
}

export interface AuthState {
  pending: boolean;
  token: string;
  error: string | null;
}

export interface LoginPayload {
  value: { email: string; password: string };
}

export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: LoginPayload;
}

export interface LoginSuccessPayload {
  token: string;
}

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
};

export interface LoginFailurePayload {
  error: string;
}

export type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: LoginFailurePayload;
};

export interface SignupPayload {
  value: { email: string; password: string };
  callback: any;
}

export interface SignupSuccessPayload {
  token: string;
}

export interface SignupFailurePayload {
  error: string;
}

export interface SignupRequest {
  type: typeof SIGNUP_REQUEST;
  payload: SignupPayload;
}

export interface SignupSuccess {
  type: typeof SIGNUP_SUCESS;
  payload: SignupSuccessPayload;
}

export interface SignupFailure {
  type: typeof SIGNUP_FAILURE;
  payload: SignupFailurePayload;
}

export type AuthActions =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | SignupRequest
  | SignupSuccess
  | SignupFailure;
