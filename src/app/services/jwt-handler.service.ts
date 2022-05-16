import { Injectable } from '@angular/core';
import { ApiLoginService } from '../api-login.service';
//import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtHandlerService {


  constructor(private ApiLoginService: ApiLoginService) {}

   apiLoginService = this.ApiLoginService;

   //TokenData = jwt_decode(this.apiLoginService.JwtToken);
   //TokenName: string = '';
   //TokenData: any;
   FakeTokenData: string = '';
   JwtToken?: string; //can be null if no token history exists
   
  StoreToken(token: string)
  {
    this.JwtToken = token;
  }

   LogtokenData() //need to figure out decoding the token front end side still
   {
     //method to send te token data to console.log for testing purposes
     //his.TokenData = jwt_decode<string>(this.apiLoginService.JwtToken);
     //return this.TokenData
     /*this.TokenName = JSON.parse(atob(this.apiLoginService.JwtToken).split('.')[1])
     ["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
      */
   }

   LogFakeData()
   {
    console.log(this.FakeTokenData + " has logged in");
   }

   public UpdateLoggedInStatus()
   {
     var temp: boolean;
     if(this.FakeTokenData != '' && this.FakeTokenData != null)
          temp = true;
      else
      temp = false;

      return temp;
   }

   GetUserName()
   {
     return this.FakeTokenData;
   }

   Logout()
   {
     this.FakeTokenData = '';//clear the logged in user data when logging out
     // keeping the token for now, but it should be stored in a place leave the page doesn't loose the token
   }
   

}
