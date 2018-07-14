import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CareRoutingModule} from './care-routing.module';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRadioModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {CareFormComponent} from './main/care-form/care-form.component';
import {CareListComponent} from './main/care-list/care-list.component';
import {SharedModule} from '../shared/shared.module';
import {MainComponent} from './main/main.component';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,
    CareRoutingModule,
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
  ],
  exports: [
    CareFormComponent,
    CareListComponent
  ],
  declarations: [
    MainComponent,
    CareFormComponent,
    CareListComponent
  ]
})
export class CareModule {
}
