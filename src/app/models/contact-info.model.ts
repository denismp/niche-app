import { Product } from './product.model';

export interface ContactInfo {
    id: number;
    email: string;
    contactDate: Date;
    notes: string;
    product: Product;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
}
