import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60073Page } from './s60073.page';

describe('S60073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60073Page;
  let fixture: ComponentFixture<S60073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
