import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreateComponent } from './character-create.component';

describe('CharacterCreateComponent', () => {
  let component: CharacterCreateComponent;
  let fixture: ComponentFixture<CharacterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CharacterCreateComponent', () => {
  let component: CharacterCreateComponent;
  let fixture: ComponentFixture<CharacterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('Should get the correct character HP', () =>{

    let val = component.getHP(12) // set the value

    expect(val).toEqual(11); //function should return 11 if 12 is passed to it
  });

});
