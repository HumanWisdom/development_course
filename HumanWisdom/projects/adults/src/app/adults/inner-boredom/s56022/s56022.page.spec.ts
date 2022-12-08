import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56022Page } from './s56022.page';

describe('S56022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56022Page;
  let fixture: ComponentFixture<S56022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
