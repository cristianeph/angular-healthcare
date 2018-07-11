import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {ListComponent} from './main/list/list.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
        outlet: 'dm'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
