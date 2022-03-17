import { Component, Input, OnInit, Output } from '@angular/core';
import {NgForm, FormsModule} from '@angular/forms';


@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.scss']
})



export class CharacterCreateComponent implements OnInit {

 
  GenBot: string = '';
  Rbot: string = 'TestBot';
  Rolled: string = '';
  min: number = 0;
  max: number =18;
  RoboText: string = `https://robohash.org/${this.Rbot}.png`


  DiceRoller(){
    return Math.floor(Math.random() * (this.max - this.min +1))
  }

  Roll(){
    this.Rolled = this.DiceRoller().toString();
  }

  GenRobot(){
    console.log('GenRobot', this.GenBot );
    this.Rbot = this.GenBot;
    console.log('Rbot', this.Rbot);
    this.RoboText= `https://robohash.org/${this.Rbot}.png`;
  }
 
 
  constructor() { }

  ngOnInit(): void {
  }

}
