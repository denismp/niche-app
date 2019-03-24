import { ProductModel } from './product.model';

export interface ContactInfoModel {
    id: number;
    email: string;
    contactDate: Date;
    notes: string;
    product: ProductModel;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
}
