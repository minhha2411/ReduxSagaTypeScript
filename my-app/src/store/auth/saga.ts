import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  loginFailure,
  loginSuccess,
  signupFailure,
  signupSuccess,
} from "./actions";

import { LOGIN_REQUEST, SIGNUP_REQUEST } from "./actionTypes";
import { IAuth } from "./types";

const login = async (payload: { email: string; password: string }) => {
  const data = await axios.post<IAuth>(
    "https://regres.in/api/login",
    { email: payload.email, password: payload.password },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
};

const signup = async (payload: { email: string; password: string }) => {
  const data = await axios.post<IAuth>(
    "https://regres.in/api/register",
    { ...payload },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
};

function* loginSaga(action: any) {
  try {
    const response: { token: string } = yield call(login, {
      email: action.payload.values.email,
      password: action.payload.values.password,
    });

    yield put(
      loginSuccess({
        token: response.token,
      })
    );

    action.payload.callback(response.token);
  } catch (error: any) {
    yield put(loginFailure({ error: error.message }));
  }
}

function* signupSaga(action: any) {
  try {
    const response: { token: string } = yield call(signup, {
      email: action.payload.values.email,
      password: action.payload.values.password,
    });

    yield put(
      signupSuccess({
        token: response.token,
      })
    );

    action.payload.callback(response.token);
  } catch (error: any) {
    yield put(signupFailure({ error: error.message }));
  }
}

function* authSaga() {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
  yield all([takeLatest(SIGNUP_REQUEST, signupSaga)]);
}

export default authSaga;
