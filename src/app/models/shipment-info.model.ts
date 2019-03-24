import { ProductModel } from './product.model';

export interface ShipmentInfoModel {
    id: number;
    fnsku: string;
    sku: string;
    shipmentDate: Date;
    skuAssignedDate: Date;
    products: ProductModel[];
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
}
