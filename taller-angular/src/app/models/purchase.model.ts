import { Product } from './product.model';
export interface Purchase {
    "id"?: number;
    "userId"?: number;
    "purchaseDate"?: string;
    "purchaseProducts"?: Product[];
    "purchaseShipping"?: PurchaseShipping;
    "purchasePayment"?: number;
    "purchaseState"?: string;
}

export interface PurchaseShipping {
    "purchaseShippingName"?: string;
    "purchaseShippingPayment": number;
}