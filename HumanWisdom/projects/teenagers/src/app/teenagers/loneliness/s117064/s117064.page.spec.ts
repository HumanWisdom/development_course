import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117064Page } from './s117064.page';

describe('S117064Page', () => {
  // let   
    let component:  S117064Page;
  let fixture: ComponentFixture<S117064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
