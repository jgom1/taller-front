import { createAction, props } from "@ngrx/store";

const login = createAction('[Header Component] login');
const logout = createAction('[Header Component] logout');
const setUser = createAction('[Header Component] setUser', props<{ user: any }>());
const setCart = createAction('[Product Component addProducToCart', props<{ cart: any }>())

export const appActions = {
    login,
    logout,
    setUser,
    setCart
}