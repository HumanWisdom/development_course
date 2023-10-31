import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60087Page } from './s60087.page';

describe('S60087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60087Page;
  let fixture: ComponentFixture<S60087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
