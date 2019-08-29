/*
* Modifcation Details:
* 1. This file used to have the required routing navigation(s) for the dashboard to access. 
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiddleComponent } from './middle/middle.component';
import { RightComponent } from './right/right.component';


const routes: Routes = [
  
  {
    path: 'list', component: MiddleComponent,
    children: [
      {
        path: 'link',
        component: RightComponent,
      }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets = [MiddleComponent, RightComponent]
