import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { appendFile } from 'fs';
import { AppComponent } from './app.component';
import { HomePageComponent } from './HomePage/home-page.component';

const routes: Routes = [
  //{path: '/Home', component: AppComponent, pathMatch: 'full'},
  {path: '' , component: HomePageComponent, pathMatch: 'full'},
  {path: '**', component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
