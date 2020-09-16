import { createAction, props } from "@ngrx/store";
import { Product } from '../models/product.model';
import { User } from '../models/user.model';

const login = createAction('[Header Component] login');
const logout = createAction('[Header Component] logout');
const setUser = createAction('[Header Component] setUser', props<{ user: any }>());
const setCart = createAction('[Product Component setCart', props<{ cart: Product[] }>())
const setFavourites = createAction('[Product Component setFavourites', props<{ favourites: any[] }>())
const setFavouritesId = createAction('[Product Component setFavouritesId', props<{ favouritesId: any }>())

export const appActions = {
    login,
    logout,
    setUser,
    setCart,
    setFavourites,
    setFavouritesId
}