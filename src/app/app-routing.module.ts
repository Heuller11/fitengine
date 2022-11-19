import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path: '', component: LoginLayoutComponent,
    children: [
      {path: '', component: LoginComponent},
      {path: 'cadastro', component: SignupComponent}
    ]},
  {path: 'home', component: AuthLayoutComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){

  }
}
