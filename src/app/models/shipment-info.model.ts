import { Product } from './product.model';

export interface ShipmentInfo {
    id: number;
    shipmentId: string,
    fnsku: string;
    sku: string;
    shipmentDate: Date;
    skuAssignedDate: Date;
    product: Product;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
}
