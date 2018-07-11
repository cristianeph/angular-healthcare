import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule, MatIconModule, MatPaginatorModule, MatSidenavModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {MainComponent} from './main/main.component';
import {ListComponent} from './main/list/list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  declarations: [
    MainComponent,
    ListComponent
  ]
})
export class DashboardModule { }
