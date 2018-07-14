import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {HistoryFormComponent} from './main/history-form/history-form.component';
import {HistoryListComponent} from './main/history-list/history-list.component';
import {CareListComponent} from "../care/main/care-list/care-list.component";
import {CareFormComponent} from "../care/main/care-form/care-form.component";

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'list',
        component: HistoryListComponent,
        outlet: 'hm'
      },
      {
        path: 'form/:id',
        component: HistoryFormComponent,
        outlet: 'hm',
        children: [
          {
            path: 'list',
            component: CareListComponent,
            outlet: 'cares'
          },
          {
            path: 'form',
            component: CareFormComponent,
            outlet: 'cares'
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule {
}
