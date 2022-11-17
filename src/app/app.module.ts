import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InputComponent } from './components/input/input.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { HomeComponent } from './pages/home/home.component';
import { MatchComponent } from './components/match/match.component';
import { LeagueComponent } from './components/league/league.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    SignupComponent,
    AlertComponent,
    HomeComponent,
    MatchComponent,
    LeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
