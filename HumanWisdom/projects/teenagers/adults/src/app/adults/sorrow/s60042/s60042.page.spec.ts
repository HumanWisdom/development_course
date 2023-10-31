import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60042Page } from './s60042.page';

describe('S60042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60042Page;
  let fixture: ComponentFixture<S60042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
