import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckPointCriteriaComponent } from './check-point-criteria.component';
import { OurCompanyComponent } from '../our-company/our-company.component';

@NgModule({
  declarations: [
    CheckPointCriteriaComponent,
    OurCompanyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CheckPointCriteriaModule { }
