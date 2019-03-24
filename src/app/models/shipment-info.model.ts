import { Product } from './product.model';

export interface ShipmentInfo {
    id: number;
    fnsku: string;
    sku: string;
    shipmentDate: Date;
    skuAssignedDate: Date;
    products: Product[];
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
}
