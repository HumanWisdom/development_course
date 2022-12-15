import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56048Page } from './s56048.page';

describe('S56048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56048Page;
  let fixture: ComponentFixture<S56048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
