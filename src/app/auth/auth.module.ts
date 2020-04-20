import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ActionsPageComponent } from './actions-page/actions-page.component';
import {OwlModule} from 'ngx-owl-carousel';


@NgModule({
  declarations: [LoginComponent, ActionsPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    OwlModule
  ]
})
export class AuthModule { }
