import { Company } from './company.model'
import { CheckPointCriteriaModule } from '../components/check-point-criteria/check-point-criteria.module';
import { ContactInfo } from './contact-info.model';
import { CompetitorsToTarget } from './competitors-to-target.model';
import { ShipmentInfo } from './shipment-info.model';
import { ParentAsin } from './parent-asin.model';

export interface Product {
    id: number;
    asin: string;
    productPageLink: string;
    twentyOnePointScore: number;
    primeLowPrice: number;
    totalUnitsSoldPerMonth: number;
    totalRevenuePerMonth: number;
    numberOfCompetitiveSellers: number;
    unitsPerMonth: number;
    revenuePerMonth: number;
    estimatedProductCost: number;
    actualProductCost: number;
    estimatedAmazonFees: number;
    actualAmazonFees: number;
    estimatedShippingCost: number;
    actualShippingCost: number;
    estimatedProcessingCost: number;
    actualProcessingCost: number;
    estimatedProfitMargin: number;
    actualProfitMargin: number;
    estimatedROI: number;
    actualROI: number;
    companys: Company[];
    contactInfos: ContactInfo[];
    criteriaYesNos: CheckPointCriteriaModule[];
    competitorsToTarget: CompetitorsToTarget[];
    shipmentInfo: ShipmentInfo;
    parentAsin: ParentAsin;
    notes: string;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
}
