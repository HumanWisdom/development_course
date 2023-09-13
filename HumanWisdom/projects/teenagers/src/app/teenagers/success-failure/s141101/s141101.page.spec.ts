import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141101Page } from './s141101.page';

describe('S141101Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141101Page;
  let fixture: ComponentFixture<S141101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
