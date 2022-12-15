import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60003Page } from './s60003.page';

describe('S60003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60003Page;
  let fixture: ComponentFixture<S60003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
