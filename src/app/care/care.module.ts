import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareRoutingModule } from './care-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    CareRoutingModule
  ],
  declarations: [FormComponent]
})
export class CareModule { }
