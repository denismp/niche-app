import { CompanyModel } from './company.model';

export interface OurCompanyModel {
    id: number;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
    company: CompanyModel;
}
