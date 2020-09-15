import { Product } from '../models/product.model';

export interface appState {
    userLogged?: boolean;
    user?: any;
    cart?: Product[];
    favourites: any[];
    favouritesId: any;
}