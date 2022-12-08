import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56014Page } from './s56014.page';

describe('S56014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56014Page;
  let fixture: ComponentFixture<S56014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
