export interface User {
    "id"?: number;
    "userName"?: string;
    "userSurname"?: string;
    "userEmail"?: string;
    "userPassword"?: string;
    "userCreditCard"?: UserCreditCard[];
    "userAddress"?: UserAddress;
}

export interface UserCreditCard {
    "userCreditCardHolder"?: string;
    "userCreditCardNumber"?: string;
    "userCreditCardDate"?: string;
}

export interface UserAddress {
    "street"?: string;
    "number"?: string;
    "entrance"?: string;
    "floor"?: string;
    "door"?: string;
    "cp"?: string;
    "city"?: string;
    "province"?: string;
}
