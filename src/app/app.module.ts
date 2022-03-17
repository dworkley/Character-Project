import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './HomePage/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterPageComponent } from './character-page/character-page.component';
import { LoginPageComponent } from './Login-page/Login-page.component';
import { TabComponent } from './character-page/tab/tab.component';
import { CharacterCreateComponent } from './character-create/character-create.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharacterPageComponent,
    LoginPageComponent,
    TabComponent,
    CharacterCreateComponent,

  ],
  imports: [
    HttpClient,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    //AppRoutingModule,
    RouterModule.forRoot([
      {path: 'Home', component: HomePageComponent, pathMatch: 'full'},
      {path: 'Character', component: CharacterPageComponent, pathMatch: 'full'},
      {path: 'Create', component: CharacterCreateComponent, pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent, pathMatch: 'full'},
      {path: '', component: HomePageComponent},
    ]),
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
