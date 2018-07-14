import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {CareListComponent} from './main/care-list/care-list.component';
import {CareFormComponent} from './main/care-form/care-form.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'list',
        component: CareListComponent,
        outlet: 'cm'
      },
      {
        path: 'form',
        component: CareFormComponent,
        outlet: 'cm'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareRoutingModule {
}
