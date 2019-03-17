import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePanelComponent } from './components/home-panel/home-panel.component';
import { AppComponent } from './app.component';
import { CheckPointCriteriaComponent } from './components/check-point-criteria/check-point-criteria.component';
import { OurCompanyComponent } from './components/our-company/our-company.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '*', component: AppComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePanelComponent },
  { path: 'checkpoint.criteria', component: CheckPointCriteriaComponent },
  { path: 'ourcompany.criteria', component: OurCompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
