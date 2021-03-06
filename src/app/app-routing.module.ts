import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePanelComponent } from './components/home-panel/home-panel.component';
import { AppComponent } from './app.component';
import { CheckPointCriteriaComponent } from './components/check-point-criteria/check-point-criteria.component';
import { OurCompanyComponent } from './components/our-company/our-company.component';
import { ProductComponent } from './components/product/product.component';
import { CompanyComponent } from './components/company/company.component';
import { CompetitorsToTargetComponent } from './components/competitors-to-target/competitors-to-target.component';
import { ParentAsinComponent } from './components/parent-asin/parent-asin.component';
import { ShipmentInfoComponent } from './components/shipment-info/shipment-info.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { CriteriaYesNoComponent } from './components/criteria-yes-no/criteria-yes-no.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { EditOurCompanyComponent } from './components/edit-our-company/edit-our-company.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';

const routes: Routes = [
  { path: '', component: HomePanelComponent },
  { path: '*', component: HomePanelComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePanelComponent },
  { path: 'checkpoint.criteria.component', component: CheckPointCriteriaComponent },
  { path: 'ourcompany.component', component: OurCompanyComponent },
  { path: 'product.component', component: ProductComponent },
  { path: 'company.component', component: CompanyComponent },
  { path: 'product.component', component: ProductComponent },
  { path: 'parent.asin.component', component: ParentAsinComponent },
  { path: 'shipment.info.component', component: ShipmentInfoComponent },
  { path: 'contact.info.component', component: ContactInfoComponent },
  { path: 'competitors.to.target.component', component: CompetitorsToTargetComponent },
  { path: 'criteria.yes.no.component', component: CriteriaYesNoComponent },
  { path: 'edit.product.component', component: EditProductComponent },
  { path: 'edit.ourcompany.component', component: EditOurCompanyComponent },
  { path: 'edit.company.component', component: EditCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
