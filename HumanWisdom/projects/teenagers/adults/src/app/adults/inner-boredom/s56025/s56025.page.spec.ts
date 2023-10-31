import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56025Page } from './s56025.page';

describe('S56025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56025Page;
  let fixture: ComponentFixture<S56025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
