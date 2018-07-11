import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import {FormComponent} from './main/form/form.component';
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {ListComponent} from './main/list/list.component';
import {MainComponent} from './main/main.component';
import {LayoutModule} from '@angular/cdk/layout';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    MainComponent,
    ListComponent,
    FormComponent
  ]
})
export class HistoryModule { }
