import { createReducer, on, Action } from "@ngrx/store";
import { appActions } from "./app.actions";
import { initialState } from './app.state';

export const featureReducer = createReducer(
    initialState,
    on(appActions.login, (state) => ({ ...state, userLogged: true })),
    on(appActions.logout, (state) => ({ ...state, userLogged: false })),
    on(appActions.setUser, (state, user) => ({ ...state, user })),
    on(appActions.setCart, (state, cart) => ({ ...state, ...cart })),
    on(appActions.setFavourites, (state, favourites) => ({ ...state, ...favourites })),
);

export function appReducer(state, action) {
    return featureReducer(state, action);
}