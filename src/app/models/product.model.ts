import { CompanyModel } from './company.model'
import { CheckPointCriteriaModule } from '../components/check-point-criteria/check-point-criteria.module';
import { ContactInfoModel } from './contact-info.model';
import { CompetitorsToTargetModel } from './competitors-to-target.model';
import { ShipmentInfoModel } from './shipment-info.model';
import { ParentAsinModel } from './parent-asin.model';

export interface ProductModel {
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
    companys: CompanyModel[];
    contactInfos: ContactInfoModel[];
    criteriaYesNos: CheckPointCriteriaModule[];
    competitorsToTarget: CompetitorsToTargetModel[];
    shipmentInfo: ShipmentInfoModel;
    parentAsin: ParentAsinModel;
    notes: string;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
}
