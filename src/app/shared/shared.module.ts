import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    LoginComponent,
    MenuComponent
  ],
  exports: [
    LoginComponent,
    MenuComponent
  ],
})
export class SharedModule {
}
