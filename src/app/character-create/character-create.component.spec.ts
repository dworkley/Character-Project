import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterCreateComponent } from './character-create.component';
import { JwtHandlerService } from '../services/jwt-handler.service';
import { Router } from '@angular/router';


describe('CharacterCreateComponent', () => {
  let component: CharacterCreateComponent;
  let fixture: ComponentFixture<CharacterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreateComponent ],
      imports: [HttpClientTestingModule, JwtHandlerService],
      providers: [{provide: Router, useValue : RouterStub}]
      
    })
    .compileComponents();
  });

  beforeEach( async() => {
    fixture = TestBed.createComponent(CharacterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  let RouterStub: Partial<Router>;
  RouterStub = {};
});

describe('CharacterCreateComponent', () => {
  let component: CharacterCreateComponent;
  let fixture: ComponentFixture<CharacterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreateComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreateComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: Router, useValue : RouterStub}]
    })
    fixture = TestBed.createComponent(CharacterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('Should get the correct character HP', () =>{

    let val = component.getHP(12) // set the value

    expect(val).toEqual(11); //function should return 11 if 12 is passed to it
  });

  let RouterStub: Partial<Router>;
  RouterStub = {};

});
