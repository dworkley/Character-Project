import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, throwError} from 'rxjs';
import { User } from './Login-page/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  //readonly loginApiUrl = 'https://localhost:7056/api';       //NotSure
  //readonly loginApiUrl = 'https://localhost:7144/api/Auth'; //FirstApi(Azure)
  readonly loginApiUrl = 'https://localhost:7015/api/Users'   //SecondApi(local-Sql)


  constructor(private http:HttpClient, public router: Router) { }

  getloginList():Observable<User>
  {
    //return this.http.get<any>(this.loginApiUrl + '/userLogins');
    return this.http.get<User>(this.loginApiUrl + '/userLogins');
  }

  getUserByName(id: string):Observable<User>
  {
    return this.http.get<User>(this.loginApiUrl + `/userLogins/${id}`)
  }

  addloginList(data: any)
  {
    //return this.http.post(this.loginApiUrl + '/userLogins', data);
    return this.http.post(this.loginApiUrl + '/register', data);
   
  }

  updateloginList(id:number|string, data:any)
  {
    return this.http.put(this.loginApiUrl + `/userLogins/${id}`,data);
  }

  deleteloginList(id:number|string)
  {
    return this.http.delete(this.loginApiUrl + `/userLogins/${id}`);
  }

  RegisterUser(data: User)
  {
    //build the request data for the api
    var request =
     {
      "username": data.userName,
      "password": data.userPass
    }

      return this.http.post(this.loginApiUrl + "/Register",request)
      .pipe(catchError(this.HandleError));
      //pipe to the error handler
  }

  LoginUser(data: User)
  {
    //build the request data for the api
    var request =
    {
      "username": data.userName,
      "password": data.userPass
    }
    //set the responce type as text to match the jwt being returned
    return this.http.post(this.loginApiUrl + '/Login', request,{responseType: 'text'})
    .pipe(catchError(this.HandleError));
  }

  private HandleError(error: HttpErrorResponse)
  {
    if(error.status === 400)
    {
    console.error("Registration error: " + error.error)
    var message = error.statusText;
    alert(error.error)
    }

    return throwError(() => new Error('something odd occured, please try again'));
  }


}