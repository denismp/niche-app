import { Product } from './product.model';

export interface CompetitorsToTarget {
    id: number;
    sellerName: string;
    url: string;
    sellerId: string;
    dateInventoryLastScouted: Date;
    notes: string;
    products: Product[];
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
}
