import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117030Page } from './s117030.page';

describe('S117030Page', () => {
  // let   
    let component:  S117030Page;
  let fixture: ComponentFixture<S117030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
