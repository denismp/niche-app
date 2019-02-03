import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomescreenComponent } from './homescreen/homescreen.component';

const routes: Routes = [
  { path: '', component: HomescreenComponent },
  { path: '*', component: HomescreenComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomescreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
