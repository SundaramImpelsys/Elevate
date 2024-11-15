import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/userVerification.reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: AuthState) => state.isLoggedIn
);

export const selectUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);
