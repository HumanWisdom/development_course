import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56017Page } from './s56017.page';

describe('S56017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56017Page;
  let fixture: ComponentFixture<S56017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
