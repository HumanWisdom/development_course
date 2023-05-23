import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117050Page } from './s117050.page';

describe('S117050Page', () => {
  // let   
    let component:  S117050Page;
  let fixture: ComponentFixture<S117050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
