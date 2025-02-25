import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth.component';

const routes: Routes = [
  {
    path: 'login',//TODO http://localhost:4200/auth/login
    component: AuthComponent,
    data:{title:'Iniciar sesión',page:'login'}
  },
  {
    path: 'register',//TODO http://localhost:4200/auth/login
    component: AuthComponent,
    data:{title:'Crear cuenta',page:'register'}
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
