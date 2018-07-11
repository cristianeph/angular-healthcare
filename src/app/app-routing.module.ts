import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './shared/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'care',
    loadChildren: './care/care.module#CareModule'/*,
    canActivate: [AuthguardService]*/
  },
  {
    path: 'history',
    loadChildren: './history/history.module#HistoryModule'/*,
    canActivate: [AuthguardService]*/
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'/*,
    canActivate: [AuthguardService]*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
