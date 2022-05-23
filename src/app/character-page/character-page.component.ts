import { Component, OnInit} from '@angular/core';
import { CharSheet } from '../Models/CharSheet';
//import { CharSheet } from '../Models/CharSheet';
import { CharHandlerService } from '../services/char-handler.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  constructor(private charHandlerService: CharHandlerService){}


  Name!: string /*= 'Robert'*/;
  Class!: string /*='Robot'*/;
  fullHP: string = "100";
  fullMana: string ="100";
  strength!: number;
  intelligence!: number;
  constitution!: number;
  wisdom!: number;
  dexterity!: number;
  charasma!: number;
  weapon: string = '';
  armor: string = '';
   Robot: string = 'Miami'
   RoboText: string = `https://robohash.org/${this.Robot}.png`
  
   public showSt:boolean = false;
   public showGr:boolean = false; 
   public showIt:boolean = false; 

   
  ngOnInit(): void 
  {
    this.PageBuilder();
  }

  showStats(){
    this.showSt = !this.showSt;
    this.showGr = false;
    this.showIt = false;
  }

  showGear(){
    this.showGr = !this.showGr;
    this.showSt = false;
    this.showIt = false;
    
  }

  showItems(){
    this.showIt = !this.showIt;
    this.showGr = false;
    this.showSt = false;
  }
    
  SetWeapon( event: any){
    this.weapon = event.target.value;
  }

  SetArmor(event: any){
    this.armor = event.target.value;
  }

  PageBuilder() // methode to get/set all the char data upon navigating to the page
  {
    var character = this.charHandlerService.GetSingleChar(); //get from locally stored data retreived from the server for the logged in person
    
    console.log("Loading from memory... ");
    console.log(character!.CharClass);
    

    this.Name = character!.CharName;
    this.Class = character!.CharClass;
    this.RoboText = character!.CharImage;
    this.strength = character!.CharStr;
    this.constitution = character!.CharCon;
    this.dexterity = character!.CharDex;
    this.intelligence = character!.CharInt;
    this.wisdom = character!.CharWis;
    this.charasma = character!.CharCha;

    
  }

}
