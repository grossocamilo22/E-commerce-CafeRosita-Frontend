import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthComponent } from './components';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    RouterLink, 
    RouterLinkActive,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
