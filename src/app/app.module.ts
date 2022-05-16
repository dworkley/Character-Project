import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './HomePage/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterPageComponent } from './character-page/character-page.component';
import { LoginPageComponent } from './Login-page/Login-page.component';
import { CharacterCreateComponent } from './character-create/character-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiLoginService } from './api-login.service';
import { CharHandlerService } from './services/char-handler.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharacterPageComponent,
    LoginPageComponent,
    CharacterCreateComponent,
    ProfilePageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    NgbModule

  ],
  providers: [ApiLoginService, CharHandlerService, ProfilePageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
