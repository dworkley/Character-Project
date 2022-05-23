import { TestBed } from '@angular/core/testing';
import {HttpTestingController, HttpClientTestingModule} from '@Angular/common/http/Testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CharHandlerService } from './char-handler.service';
import { CharSheet } from '../Models/CharSheet';


export class TestService { constructor(private http: HttpClient) {} }

//define thr data we expect to get from the api , in this case an array of charsheet objects

//this data was copied from the swagger page for the api get by username call
const ReturnedApiData = [
  {
    "charId": 1,
    "username": "john",
    "charImgString": "https://robohash.org/gregg.png",
    "charName": "gregg",
    "class": "Glitch",
    "charHp": "12",
    "charMp": "12",
    "str": 0,
    "con": 14,
    "dex": 0,
    "wis": 14,
    "int": 0,
    "cha": 0
  },
  {
    "charId": 8,
    "username": "john",
    "charImgString": "https://robohash.org/smitty.png",
    "charName": "smitty",
    "class": "Glitch",
    "charHp": "10",
    "charMp": "10",
    "str": 0,
    "con": 0,
    "dex": 0,
    "wis": 0,
    "int": 0,
    "cha": 0
  }
]
const username: string = 'john'; //the testing logged in user
const getUrl = `https://localhost:7015/api/CharSheets/GetCharacters/{request}?request=${username}`;

describe('CharHandlerService', () => {
  let service: CharHandlerService;
  let httpMock : HttpTestingController;

  let httpTestingController: HttpTestingController;

  beforeEach( async() => {
    //configure the testbed 
    await TestBed.configureTestingModule({
      providers: [CharHandlerService],
      imports: [HttpClientTestingModule]
    })
    //Instantiate all the needed entities
    service = TestBed.inject(CharHandlerService);
    httpMock = TestBed.inject(HttpTestingController)
    //httpClient = TestBed.inject(HttpClient);
    //httpTestingController = TestBed.inject(HttpTestingController);
    
  });

  afterEach(() => {
    //httpTestingController.verify(); // varifies there are no outstanding requests
  })


  it('should be created', () => {
    expect(CharHandlerService).toBeTruthy();
  });

  it('can test the http.get methode', () => {
    /*///make the http call
    httpClient.get(getUrl).subscribe(data => {
      //when observable resolves, data should match expected data
      expect(data).toEqual(ReturnedApiData);
    })*/
  })
});
