import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56051Page } from './s56051.page';

describe('S56051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56051Page;
  let fixture: ComponentFixture<S56051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
