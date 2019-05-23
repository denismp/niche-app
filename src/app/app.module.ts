import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { DataTableModule, SharedModule, ButtonModule, TabViewModule, PickListModule } from 'primeng/primeng';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HomePanelComponent } from './components/home-panel/home-panel.component';
import { CheckPointCriteriaComponent } from './components/check-point-criteria/check-point-criteria.component';
import { OurCompanyComponent } from './components/our-company/our-company.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckpointCriteriaService } from './services/checkpoint-criteria.service';
import { CheckpointCriteriaStore } from './stores/checkpoint-criteria-store';
import { ProductComponent } from './components/product/product.component';
import { CompanyComponent } from './components/company/company.component';
import { CompetitorsToTargetComponent } from './components/competitors-to-target/competitors-to-target.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ParentAsinComponent } from './components/parent-asin/parent-asin.component';
import { ShipmentInfoComponent } from './components/shipment-info/shipment-info.component';
import { CriteriaYesNoComponent } from './components/criteria-yes-no/criteria-yes-no.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { EditOurCompanyComponent } from './components/edit-our-company/edit-our-company.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { EditCheckpointCriteriaComponent } from './components/edit-checkpoint-criteria/edit-checkpoint-criteria.component';
import { EditCompetitorsToTargetComponent } from './components/edit-competitors-to-target/edit-competitors-to-target.component';
import { EditContactInformationComponent } from './components/edit-contact-information/edit-contact-information.component';
import { EditCriteriaYesNoComponent } from './components/edit-criteria-yes-no/edit-criteria-yes-no.component';
import { EditParentAsinsComponent } from './components/edit-parent-asins/edit-parent-asins.component';
import { EditShipmentInformationComponent } from './components/edit-shipment-information/edit-shipment-information.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    HomePanelComponent,
    CheckPointCriteriaComponent,
    OurCompanyComponent,
    ProductComponent,
    CompanyComponent,
    CompetitorsToTargetComponent,
    ContactInfoComponent,
    ParentAsinComponent,
    ShipmentInfoComponent,
    CriteriaYesNoComponent,
    EditProductComponent,
    EditOurCompanyComponent,
    EditCompanyComponent,
    EditCheckpointCriteriaComponent,
    EditCompetitorsToTargetComponent,
    EditContactInformationComponent,
    EditCriteriaYesNoComponent,
    EditParentAsinsComponent,
    EditShipmentInformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PanelModule,
    ToolbarModule,
    SplitButtonModule,
    MenuModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    TabViewModule,
    PickListModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CheckpointCriteriaService, CheckpointCriteriaStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
