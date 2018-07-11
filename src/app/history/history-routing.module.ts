import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {FormComponent} from './main/form/form.component';
import {ListComponent} from './main/list/list.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
        outlet: 'hm'
      },
      {
        path: 'form/edit/:id',
        component: FormComponent,
        outlet: 'hm'
      },
      {
        path: 'form/new',
        component: FormComponent,
        outlet: 'hm'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
