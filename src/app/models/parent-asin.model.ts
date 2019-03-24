import { ProductModel } from './product.model';

export interface ParentAsinModel {
    id: number;
    asin: string;
    childAsins: ProductModel[];
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
}
