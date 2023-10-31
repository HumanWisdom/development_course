import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56052Page } from './s56052.page';

describe('S56052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56052Page;
  let fixture: ComponentFixture<S56052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
