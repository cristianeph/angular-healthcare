import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareRoutingModule } from './care-routing.module';
import { FormComponent } from './form/form.component';
import {ListComponent} from './list/list.component';
import {MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CareRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  declarations: [FormComponent, ListComponent]
})
export class CareModule { }
