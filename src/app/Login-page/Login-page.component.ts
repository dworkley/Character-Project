import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLoginService } from '../api-login.service';
import { JwtHandlerService } from '../services/jwt-handler.service';
import { AppComponent } from '../app.component';
import { CharHandlerService } from '../services/char-handler.service';
import { ProfilePageComponent } from '../profile-page/profile-page.component';

@Component({
  selector: 'app-Login-page',
  templateUrl: './Login-page.component.html',
  styleUrls: ['./Login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  
  RegisterName!: string;
  RegisterPassword! : string;

  LoginName = '';
  LoginPassword = '';
  
  constructor(private apiLoginService: ApiLoginService, private router: Router
    , private jwtHandlerService: JwtHandlerService, private charHandlerService: CharHandlerService,
      private appComponent: AppComponent, private profilePageComponent: ProfilePageComponent) { }

  ngOnInit(): void{}

  RegisterUser()
  {
    //set the user object values
    let User = {userName: this.RegisterName, userPass: this.RegisterPassword};
  
    //console.log("User: " + User + " | User creds entered: " + User.userName + " " + User.userPass );
    
    if(User.userName != null && User.userPass != null)
    {
      //console.log("starting http request")
    this.apiLoginService.RegisterUser(User).subscribe(success =>{
    alert("Registration successful" + User.userName + " " + User.userPass)
    });
    }

    //clear the form fields on submit
    this.RegisterName = ' ';
    this.RegisterPassword = '';

    //added code to nav away from this page to the login page
    //but for now their one page for simplicity

    //this.router.navigateByUrl('');
  }

  Login()
  {
    //set the user object and token variable 
    let User = {userName: this.LoginName, userPass: this.LoginPassword};
    var token = "";
    if(User.userName != null && User.userPass != null)
    {
      this.apiLoginService.LoginUser(User).subscribe(data =>{ 
   
        token = data.toString();
        console.log("token : " + token);
        this.jwtHandlerService.StoreToken(token);

        //faking the token data until I figure out how to decode it inside angular
        this.jwtHandlerService.FakeTokenData = User.userName;
        this.jwtHandlerService.LogFakeData();
        this.appComponent.UpdatePage();
        this.charHandlerService.GetFromServer(this.LoginName);
        this.profilePageComponent.LoadCharacters(); //char data from service -> component
        //this.Waiterfunction(); //load the char data but force it to wait
        //this.router.navigateByUrl('profile'); //send to the profile page on success
        //setTimeout(() =>{this.router.navigateByUrl('profile')},5000);
        
      });
      this.router.navigateByUrl('profile'); //send to the profile page on success
    }
    else
    {
      alert("username or password empty");
    }
  }

  private async Waiterfunction()
  {
    await this.profilePageComponent.LoadCharacters();

    await this.router.navigateByUrl('profile'); //send to the profile page on success
        
  }

  
}
