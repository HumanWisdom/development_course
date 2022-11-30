import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56054Page } from './s56054.page';

describe('S56054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56054Page;
  let fixture: ComponentFixture<S56054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
