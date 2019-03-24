import { Company } from './company.model';

export interface OurCompany {
    id: number;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
    company: Company;
}
