import { Component, OnInit } from '@angular/core';
import {Observable, map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import * as _ from 'lodash';

interface CharSheet
{
    username: string;
    CharImage: string;
    CharName: string;
    CharClass: string;

    CharHp: number;
    CharMp: number;

    CharStr: number;
    CharDex: number;
    CharCon: number;
    CharWis: number;
    CharInt: number;
    CharCha: number;

}

@Component({
  selector: 'app-testing',
  //templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  template: `
  <ul *ngIf="Characters | async as Characters else noData">
      <li *ngFor="let Character of Characters">
          {{Characters.CharName}}
      </li> 
  </ul>
  <ng-template #noData>No Data Available</ng-template>
`})

export class TestingComponent implements OnInit {
  
  Characters!: Observable<CharSheet[]>; 
  profileName = "john";

  constructor(private http:HttpClient) {
  }

  ngOnInit() {
      this.Characters = this.http
          .get<CharSheet[]>(`https://localhost:7015/api/CharSheets/GetCharacters/{request}?request=${this.profileName}`)
          .pipe(map(data => _.values(data)))
          //.do(console.log);
  }

}
