import { Product } from './product.model';
export interface Purchase {
    "id"?: number;
    "userId"?: number;
    "purchaseDate"?: string;
    "purchaseProducts"?: Product[];
    "purchaseDiscount"?: PurchaseDiscount;
    "purchaseShipping"?: PurchaseShipping;
    "purchasePayment"?: number;
    "purchaseState"?: string;
}

export interface PurchaseDiscount {
    "purchaseDiscountName"?: string;
    "purchaseDiscountPercentage": number;
}

export interface PurchaseShipping {
    "purchaseShippingName"?: string;
    "purchaseShippingPayment": number;
}