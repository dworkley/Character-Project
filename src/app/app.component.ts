import { Component } from '@angular/core';
import { JwtHandlerService } from './services/jwt-handler.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private jwtHanlderService: JwtHandlerService){}
  title = 'Character-Project';
  LoggedIn: boolean = false;

  public UpdatePage()
  {
    this.LoggedIn = this.jwtHanlderService.UpdateLoggedInStatus();
  }

}
