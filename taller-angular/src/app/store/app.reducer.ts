import { createReducer, on, Action } from "@ngrx/store";
import { appActions } from "./app.actions";

const initialState = {
    userLogged: false,
    user: {}
}

export const featureReducer = createReducer(
    initialState,
    on(appActions.login, (state) => ({ ...state, userLogged: true })),
    on(appActions.logout, (state) => ({ ...state, userLogged: false })),
    on(appActions.setUser, (state, user) => ({ ...state, user })),
);

export function appReducer(state, action) {
    return featureReducer(state, action);
}