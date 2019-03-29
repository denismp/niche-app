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

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    HomePanelComponent,
    CheckPointCriteriaComponent,
    OurCompanyComponent,
    ProductComponent,
    CompanyComponent,
    CompetitorsToTargetComponent
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
    PickListModule
  ],
  providers: [CheckpointCriteriaService, CheckpointCriteriaStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
