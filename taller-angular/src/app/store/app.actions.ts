import { createAction, props } from "@ngrx/store";
import { Product } from '../models/product.model';

const login = createAction('[Header Component] login');
const logout = createAction('[Header Component] logout');
const setUser = createAction('[Header Component] setUser', props<{ user: any }>());
const setCart = createAction('[Product Component setCart', props<{ cart: Product[] }>())

export const appActions = {
    login,
    logout,
    setUser,
    setCart
}