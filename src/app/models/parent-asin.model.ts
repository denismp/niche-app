import { Product } from './product.model';

export interface ParentAsin {
    id: number;
    asin: string;
    childAsins: Product[];
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
}
