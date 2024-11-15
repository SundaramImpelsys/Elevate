// auth.actions.ts
import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login', props<{ user: any }>());
export const updateUser = createAction('[Auth] updateUser', props<{ user: any }>());
export const logout = createAction('[Auth] Logout');
export const verifyUser = createAction('[Auth] Verify User');
