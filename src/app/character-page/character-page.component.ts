import { Component, OnInit, ContentChild, QueryList } from '@angular/core';
import { iif } from 'rxjs';

//import { TabComponent } from './character-page/tab/tab.component';


@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  Name: string = 'Robert'
  Class: string = 'Robot'
  fullHP: string = "100";
  fullMana: string ="100";
  strength: number = 10;
  intelligence: number = 10;
  constitution : number = 10;
  wisdom: number = 10;
  dexterity: number = 10;
  charasma: number = 10;
  weapon: string = '';
  armor: string = '';
   Robot: string = 'Miami'
   RoboText: string = `https://robohash.org/${this.Robot}.png`

   public showSt:boolean = false;
   public showGr:boolean = false; 
   public showIt:boolean = false; 

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

  constructor() { }

  ngOnInit(): void {
  }

}
