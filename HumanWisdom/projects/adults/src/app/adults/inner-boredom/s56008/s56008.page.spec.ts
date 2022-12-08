import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56008Page } from './s56008.page';

describe('S56008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56008Page;
  let fixture: ComponentFixture<S56008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
