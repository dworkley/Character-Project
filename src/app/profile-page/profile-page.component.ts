import { Component,OnInit } from '@angular/core';
import { CharHandlerService } from '../services/char-handler.service';
import {Router} from '@angular/router';
import { CharSheet } from '../Models/CharSheet';
import { JwtHandlerService } from '../services/jwt-handler.service';
import { Observable, map} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';



@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  characters: Array<CharSheet> = new Array;
  characters2: CharSheet[] = new Array;
  Character = '';
  Characters!: Observable<CharSheet[]>; 

  constructor(private charHandlerService: CharHandlerService, private router: Router,
              private jwtHandlerService: JwtHandlerService, private http: HttpClient) {
   }

  profileName = this.jwtHandlerService.GetUserName();
  name = '';

    ngOnInit(): void {
    //console.log(this.charHandlerService.characters.length + "characters found in memory");
    this.characters = this.charHandlerService.GetCharList();
    this.Characters= this.http.get<CharSheet[]>(`https://localhost:7015/api/CharSheets/GetCharacters/{request}?request=${this.profileName}`).pipe(map(data => _.values(data)));
    
  }

  NavToCharacter(selected: string)
  {
    //set the current selected char on the handler service
    this.charHandlerService.Character = selected;
    console.log(selected + " has been chosen")
    this.router.navigateByUrl('Character'); //send to the character page

  }

  LogOut()
  {
    this.profileName = ''; //clear the profile name
    this.jwtHandlerService.Logout(); //clear the data on the JwtService

    //this.router.navigateByUrl('Home'); //send to the Home page once the user has been logged out
  }

  LoadCharacters()
    {
      //clook for any characters from the server
      console.log("checking for characters...")
      console.log(this.charHandlerService.characters2.length + " found")
      for(var i = 0; i < this.charHandlerService.characters2.length; i++)
      {
        console.log("located character: " + this.charHandlerService.characters2[i])
      }
      
    }

  logCharData()
  {
    console.log("running service")
    //send to console that this methode ran for debugging
    
    this.charHandlerService.GetFromServer(this.profileName).subscribe(
      (data: CharSheet[]) => this.characters2 = data
    )
      console.log("data from server retrieved , attempting to print out data")
      console.log(this.characters2.length + "found data")
    for(var i =0; i < this.characters2.length; i++)
    {
      console.log(this.characters2[i])//log the stored data
    }

  }

 
}

//this.charHandlerService.GetFromServer(this.profileName)/*.subscribe((response: CharSheet[]) => {
      //console.log("log data: \n" + response)
    //})
      /*console.log(response)
      
      var newChar = {} as CharSheet;
      newChar.username = response.username,
      newChar.CharImage = response.CharImage,
      newChar.CharName = response.CharName,
      newChar.CharClass = response.CharClass,
      newChar.CharHp = response.CharHp,
      newChar.CharMp = response.CharMp,
      newChar.CharStr = response.CharStr,
      newChar.CharCon = response.CharCon,
      newChar.CharDex = response.CharDex,
      newChar.CharInt = response.CharInt,
      newChar.CharWis = response.CharWis,
      newChar.CharCha = response.CharCha
      console.log(newChar)
      
      
      
      var newChar2 = {} as CharSheet;
      newChar2.username = response.username,
      newChar2.CharImage = response.CharImage,
      newChar2.CharName = response.CharName,
      newChar2.CharClass = response.CharClass,
      newChar2.CharHp = response.CharHp,
      newChar2.CharMp = response.CharMp,
      newChar2.CharStr = response.CharStr,
      newChar2.CharCon = response.CharCon,
      newChar2.CharDex = response.CharDex,
      newChar2.CharInt = response.CharInt,
      newChar2.CharWis = response.CharWis,
      newChar2.CharCha = response.CharCha
      
      console.log(newChar2);
      
    })*/