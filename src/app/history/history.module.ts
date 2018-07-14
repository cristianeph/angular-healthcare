import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HistoryRoutingModule} from './history-routing.module';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatPaginatorModule, MatRadioModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {MainComponent} from './main/main.component';
import {LayoutModule} from '@angular/cdk/layout';
import {SharedModule} from '../shared/shared.module';
import {HistoryListComponent} from './main/history-list/history-list.component';
import {HistoryFormComponent} from './main/history-form/history-form.component';
import {CareModule} from '../care/care.module';

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
    MatRadioModule,
    MatCardModule,
    MatDividerModule,
    CareModule
  ],
  declarations: [
    MainComponent,
    HistoryListComponent,
    HistoryFormComponent,
  ]
})
export class HistoryModule {
}
