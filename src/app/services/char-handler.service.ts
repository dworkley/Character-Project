import { Injectable } from '@angular/core';
import { CharSheet } from '../Models/CharSheet';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, throwError, map, tap, pipe} from 'rxjs';
import { JwtHandlerService } from './jwt-handler.service';



@Injectable({
  providedIn: 'root'
})


export class CharHandlerService{

  readonly CharSheetApiUrl = 'https://localhost:7015/api/CharSheets1'

  public characters: Array<CharSheet> = new Array; //the array storing local data for temporary usage
  public characters2: Array<CharSheet> = new Array; //array i'm trying to store server data to
  public Character: string = '';
  public chars! : CharSheet[];
  
 
  constructor(private http:HttpClient, private jwtHandlerService: JwtHandlerService) { }

  AddChar(charSheet: CharSheet)
  {
    //adds the char to the array of characters , array data lost when website is left
    // or a new instance of this service is called --> local storage opions loaded from server future work
    this.characters.push(charSheet);
    console.log(this.characters + " has been saved, total Characters: " + this.characters.length);
  }

  GetCharList()
  {
    //return the whole list of characters
    //return this.characters  //locally saved info
    return this.characters; //the retreived info from the sql server
  }

  GetSingleChar()
  {
    //search the array for the character by name and return the charSheet for that character
    //return this.characters.find(char => char.CharName === this.Character);
  
    return this.chars.find(charsheet => charsheet.CharName === this.Character);
  }

  SavetoServer(data: CharSheet)
  {
    //build the new Character sheet object
    var newCharacter = 
    {
      //"charId": 0, //auto sets on server side , but keeping the code here for now
      "username": this.jwtHandlerService.FakeTokenData, //the user this char belongs to from fake token data
      "CharImage": data.CharImage.toString(),
      "CharName": data.CharName,
      "CharClass": data.CharClass,
      "CharHp": data.CharHp.toString(),
      "CharMp": data.CharMp.toString(),
      "CharSTR": data.CharSTR,
      "CharCon": data.CharCON,
      "CharDex": data.CharDEX,
      "CharWIS": data.CharWIS,
      "CharINT": data.CharINT,
      "CharCHA": data.CharCHA
    }

    //send the object to the API -> saved to server
    return this.http.post(this.CharSheetApiUrl +"/SaveCharacter",newCharacter).pipe(catchError(this.HandleError));
    //pipe to the catch error function
  }

  //old methode i commented out to save the code if i needed it later
 /* GetFromServer(data: string): Observable<Array<CharSheet>>
  {
    var GetUrl = `https://localhost:7015/api/CharSheets/GetCharacters/{request}?request=${data}`

    //return this.http.get<CharSheet>(GetUrl)
    this.http.get<Array<CharSheet>>/*<{[key:number]: CharSheet}>(GetUrl)
    .pipe(map(charData =>{

      console.log("checking server...");
      console.log(charData);

      if(charData != null)
      {
        for(var i in charData)
        {
          //if(typeof(charData[i]) === 'object') -> returning true
          //let result = charData[i].hasOwnProperty('CharStr'); // returning false -> here lies my code issue 
          
       
        
         
          //let newChar: CharSheet = charData[i];
         // console.log(newChar);
          //this.characters2.push(newChar);
          //console.log(this.characters2[i].CharName);

          //console.log("Character:" + NewChar)
        }
      }
    })).subscribe();
    
    
    /*.subscribe(response => {
       
      console.log(response)
      
      for(var i in response)
      {
        console.log(response[i]);
        //adding the object successfully to the array to store them once retrieved
        this.characters2[i] =  response[i];
        console.log(this.characters2[i]) //this prints out the same data as line 81 showing 1:1 data passing
        console.log(this.characters2[i].CharName)
        
      }
    })
  
  } */

  GetFromServer(data: string)//: Observable<CharSheet[]>
  {
    let url = `https://localhost:7015/api/CharSheets/GetCharacters/{request}?request=${data}`;
    console.log("fetching server data...")

    //call the api function , expect an array of charsheets -> bring the data in as such
    return this.http.get<CharSheet[]>(url, {responseType: 'json'}) //make the http call to the api, have json data formatted as an array of CharSheet objects 
    .subscribe((response: CharSheet[]) => { //take the response and act on it
      console.log(response); //log the response from the API
      this.chars = response; //store the data inside this array of charsheet objects
      console.log("stored characters: " + this.chars.length);
      console.log(this.chars[0].CharName); //this is working
      console.log(response[0].CharSTR); // this is not working for some reason ...
      
      //console.log(response[0].hasOwnProperty.call(CharSheet, 'CharClass')
       //checking to get object data from inside the array

    });
    
  }
  
  private HandleError(error: HttpErrorResponse)
  {
    if(error.status === 400)
    {
    console.error("Connection Issue: " + error.error)
    var message = error.statusText;
    alert(error.error)
    }

    return throwError(() => new Error('something odd occured, please try again'));
  }

  //the interface data used in the below test methode
  /*interface UserData {
    id: number,
    name: String,
    username: String,
    email: String,
    address: {
      street: string,
      suite?: string,
      city: string,
      zipcode: string,
      geo : {
        lat: string,
        lng: string
      }
    }
    phone: string,
    website: string,
    company : {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }*/

  //testing methode for learning data retreival : SQL_Server -> API -> Front End
  /*async GetUserData()
  {
    let url = `https://jsonplaceholder.typicode.com/users`
    var users!: UserData[];

     this.http.get<UserData[]>(url)
    .subscribe((response) => {
      console.log(response);
      users = response;
      console.log(users.length);
      console.log(users[0].name);
    });

  }*/

}

