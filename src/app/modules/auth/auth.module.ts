import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RegisterFormComponent, RegisterOptionsComponent } from './Components';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    RouterLink, 
    RouterLinkActive,
    RegisterFormComponent,
    RegisterOptionsComponent,
    
  ]
})
export class AuthModule { }
