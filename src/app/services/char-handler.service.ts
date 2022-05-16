import { Injectable } from '@angular/core';
import { CharSheet } from '../Models/CharSheet';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http'
import { catchError, Observable, throwError, map, tap} from 'rxjs';
import { JwtHandlerService } from './jwt-handler.service';
import * as _ from 'lodash';

interface IServerData //used for attempting to handle json data while testing
{
  "username": string,
  "CharImage": string,
  "CharName": string,
  "CharClass": string,
  "CharHp": number,
  "CharMp": number,
  "CharStr": number,
  "CharDex": number,
  "CharCon": number,
  "CharWis": number,
  "CharInt": number,
  "CharCha": number
}

@Injectable({
  providedIn: 'root'
})


export class CharHandlerService{

  readonly CharSheetApiUrl = 'https://localhost:7015/api/CharSheets'

  public characters: Array<CharSheet> = new Array; //the array storing local data for temporary usage
  public characters2: Array<CharSheet> = new Array; //array i'm trying to store server data to
  public Character: string = '';
  

 
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
    return this.characters.find(char => char.CharName === this.Character);
  }

  SavetoServer(data: CharSheet)
  {
    //build the new Character sheet object
    var newCharacter = 
    {
      //"charId": 0, //auto sets on server side , but keeping the code here for now
      "username": this.jwtHandlerService.FakeTokenData, //the user this char belongs to from fake token data
      "charImgString": data.CharImage.toString(),
      "charName": data.CharName,
      "class": data.CharClass,
      "charHp": data.CharHp.toString(),
      "charMp": data.CharMp.toString(),
      "str": data.CharStr,
      "con": data.CharCon,
      "dex": data.CharDex,
      "wis": data.CharWis,
      "int": data.CharInt,
      "cha": data.CharCha
    }

    //send the object to the API -> saved to server
    return this.http.post(this.CharSheetApiUrl +"/SaveCharacter",newCharacter).pipe(catchError(this.HandleError));
    //pipe to the catch error function
  }

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

  GetFromServer(data: string): Observable<CharSheet[]>
  {
    let url = `https://localhost:7015/api/CharSheets/GetCharacters/{request}?request=${data}`;
    console.log("fetching server data...")
    //call the api function , expect an array of charsheets -> bring the data in as such
    return this.http.get<CharSheet[]>(url)//.pipe(map(data => _.values(data)));
    //return Characters$;
  }

  mockGetFromServer(data: String)
  {
    //testing a call to another trial methode on the api
    let url = `https://localhost:7015/api/CharSheets/GetCharacters2/{request}?request=${data}`;

    this.http.get(url).subscribe(resualt => {console.log(resualt)})
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

}
//if(Array.isArray(response)) true

      /*for(var i in response) // tested , array length 2 -> (0,1), of objects
      {
        
        if(response[i].hasOwnProperty('CharName'))
        {
          console.log("charname exists")
        };
      }*/
      
    /*return this.http.get<IServerData[]>(url,{responseType: 'json'}).pipe(
      map(obj => obj.map((sp): CharSheet =>({ //map the returned server product
        username: sp.username,
        CharImage: sp.CharImage,
        CharName: sp.CharName,
        CharClass: sp.CharClass,
        CharHp: sp.CharHp,
        CharMp: sp.CharMp,
        CharStr: sp.CharStr,
        CharCon: sp.CharCon,
        CharDex: sp.CharDex,
        CharWis: sp.CharWis,
        CharInt: sp.CharInt,
        CharCha: sp.CharCha,
      })))
    )*/
