import { CheckPointCriteria } from './check-point-criteria.model';
import { Product } from './product.model';

export interface CriteriaYesNo {
    id: number;
    yes: boolean;
    product: Product;
    checkPointCriterias: CheckPointCriteria[];
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
}
