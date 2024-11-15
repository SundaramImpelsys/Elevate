// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { login, logout, verifyUser, updateUser } from '../actions/userVerification.actions';

export interface AuthState {
  user: any;
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  user: null,
  isLoggedIn: false
};

export const authReducer = createReducer(
  initialState,
  on(verifyUser, state => state),
  on(login, (state, { user }) => ({
    ...state,
    isLoggedIn: true,
    user
  })),
  on(logout, state => ({
    ...state,
    isLoggedIn: false,
    user: null
  })),
  on(updateUser, (state, {user}) => ({
    ...state,
    user
  }))
);
