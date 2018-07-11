import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import {
  MatButtonModule, MatInputModule, MatListModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: [
    LoginComponent,
    MenuComponent,
    HeaderComponent
  ],
  exports: [
    LoginComponent,
    MenuComponent,
    HeaderComponent
  ],
})
export class SharedModule {
}
