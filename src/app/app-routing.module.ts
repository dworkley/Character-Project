import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './HomePage/home-page.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CharacterCreateComponent } from './character-create/character-create.component';
import { LoginPageComponent } from './Login-page/Login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CharHandlerService } from './services/char-handler.service';

const routes: Routes = [
      {path: 'Home',component: HomePageComponent, pathMatch: 'full'},
      {path: 'Character', component: CharacterPageComponent, pathMatch: 'full'},
      //{path: 'Character/{{}}', component: CharacterPageComponent, /*pathMatch: 'full'*/},
      {path: 'Create', component: CharacterCreateComponent, pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent, pathMatch: 'full'},
      {path: 'profile', component: ProfilePageComponent, pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: '**', component: HomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
