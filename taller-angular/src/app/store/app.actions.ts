import { createAction, props } from "@ngrx/store";

const login = createAction('[Header Component] login');
const logout = createAction('[Header Component] logout');
const setUser = createAction('[Header Component] setUser', props<{ user: any }>());

export const appActions = {
    login,
    logout,
    setUser
}