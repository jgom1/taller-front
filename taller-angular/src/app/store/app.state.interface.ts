import { Product } from '../models/product.model';
import { User } from '../models/user.model';

export interface appState {
    userLogged?: boolean;
    user?: any;
    cart?: Product[];
    favourites: any[];
    favouritesId: any;
}