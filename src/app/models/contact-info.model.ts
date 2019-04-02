import { Product } from './product.model';

export interface ContactInfo {
    id: number;
    name: string;
    email: string;
    phone1: string;
    phone2: string;
    address1: string;
    address2: string;
    city: string;
    stateOrProvince: string;
    country: string;
    postalCode: string;
    contactDate: Date;
    notes: string;
    product: Product;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
}
