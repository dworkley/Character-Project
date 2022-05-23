import { Component,OnInit } from '@angular/core';
import { CharHandlerService } from '../services/char-handler.service';
import {Router} from '@angular/router';
import { CharSheet } from '../Models/CharSheet';
import { JwtHandlerService } from '../services/jwt-handler.service';
import { Observable, map, tap, Subscription,} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(private charHandlerService: CharHandlerService, private router: Router,
              private jwtHandlerService: JwtHandlerService, private http: HttpClient) {
   }

    //Character = '';
  characters: Array<CharSheet> = new Array;
  characters2: CharSheet[] = [];
  profileName = this.jwtHandlerService.GetUserName();
  name = '';


    ngOnInit(): void {
    //this.characters = this.charHandlerService.GetCharList(); locally saved data call.
    console.log("Finished Getting Server Data")
    this.logCharData();
    
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
      //look for any characters from the "server" , locally saved version
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
    
    //this.charHandlerService.GetFromServer(this.profileName);
    
    console.log("attempting to retrive data from the service")
    //console.log(this.charHandlerService.chars.length);
  

      console.log("logging found characters")
      this.characters2 = this.charHandlerService.chars; //correctly passing data to this component
      console.log(this.characters2); //test if their storing to this component

      
    
    
    //call the testing methode on the service
    //this.charHandlerService.GetUserData();
  }

 
}
