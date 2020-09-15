import { appState } from './app.state.interface';

export const initialState: appState = {
    userLogged: false,
    user: undefined,
    cart: [],
    favourites: []
}