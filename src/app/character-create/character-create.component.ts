import { ViewportScroller } from '@angular/common';
import { Component,OnInit} from '@angular/core';
//import {NgForm, FormsModule} from '@angular/forms';
import { CharHandlerService } from '../services/char-handler.service';
import { JwtHandlerService } from '../services/jwt-handler.service';


@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.scss']
})

export class CharacterCreateComponent implements OnInit {

  
  constructor(private charHandler: CharHandlerService, private viewPortScroller: ViewportScroller,
              private jwtHandlerService: JwtHandlerService ) { }


  Genbot = '';
  Rbot: string = 'TestBot';
  Rolled: string = '';
  RoboText: string = `https://robohash.org/${this.Rbot}.png`;

  BotName: string = '';
  CharClass: string ='';
  CharStr: number = 0;
  CharDex: number = 0;
  CharCon: number = 0;
  CharWis: number = 0;
  CharInt: number = 0;
  CharCha: number = 0;

  ngOnInit(): void {
  }

  DiceRoller(){
    return this.Rolled = (Math.floor(Math.random() * 16) + 3).toString();
     //random number from 3 - 18 -> as string value
  }

  GenRobot(){
    console.log('GenRobot', this.Genbot );
    this.Rbot = this.Genbot;
    console.log('Rbot', this.Rbot);
    this.RoboText= `https://robohash.org/${this.Rbot}.png`;
    //take the initial display image "testbot" and update the screen with the new fetched image
  }

  GenerateChar()
  {
    var initialHP: number = this.getHP(this.CharCon);
    var InitialMP: number = this.getMP(this.CharWis);;

    let CharSheet = {
      username: this.jwtHandlerService.GetUserName(),
      CharName: this.BotName,
      CharImage: this.RoboText,
      CharClass: this.CharClass,
      CharHp: initialHP,
      CharMp: InitialMP,
      CharStr: this.CharStr,
      CharDex: this.CharDex,
      CharCon: this.CharCon,
      CharWis: this.CharWis,
      CharInt: this.CharInt,
      CharCha: this.CharCha,
                };
    console.log(CharSheet);

    //add to the list of characters
    this.charHandler.AddChar(CharSheet);
    alert(this.BotName + " Has Joined the Party")
    //save to server 
    this.charHandler.SavetoServer(CharSheet).subscribe(result =>{
      console.log(result);
      alert(this.BotName + " was saved on the server");
    });

    //call the function to clear the fields to keep things simple
    this.ClearFields();

  }

  getHP(charCon: number)
  {
     var temp: number = 10;
      //at 12-14-16-18 add one to the modifier
     switch(charCon)
     {
       case 8:
         temp = 9;
         break;
       case 12:
         temp = 11;
         break;
        case 14:
          temp = 12;
          break;
        case 16:
          temp = 13;
          break;
        case 18:
          temp = 14;
          break;
     }

     return temp;

  
  }

  getMP(charWis: number)
  {
    var temp: number = 10;
    //at 12-14-16-18 add one to the modifier
   switch(charWis)
   {
     case 8:
       temp = 9;
       break;
     case 12:
       temp = 11;
       break;
      case 14:
        temp = 12;
        break;
      case 16:
        temp = 13;
        break;
      case 18:
        temp = 14;
        break;
   }

   return temp;

  }

  ClearFields()
  {
    this.Genbot = '';
    this.Rbot = 'TestBot';
    this.Rolled = '';
    this.RoboText = `https://robohash.org/${this.Rbot}.png`;

    this.BotName = '';
    this.CharClass ='';
    this.CharStr = 0;
    this.CharDex = 0;
    this.CharCon = 0;
    this.CharWis = 0;
    this.CharInt = 0;
    this.CharCha = 0;

    this.viewPortScroller.scrollToPosition([0,0])
  }

}
