import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48099Page } from './s48099.page';

describe('S48099Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48099Page;
  let fixture: ComponentFixture<S48099Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48099Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48099Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
