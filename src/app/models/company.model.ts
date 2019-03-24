import { ProductModel } from './product.model';

export interface CompanyModel {
    id: number;
    email: string;
    companyName: string;
    webSite: string;
    phone: string;
    notes: string;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
    products: ProductModel[];
}
