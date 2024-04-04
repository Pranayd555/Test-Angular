import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class LoginModule { }
