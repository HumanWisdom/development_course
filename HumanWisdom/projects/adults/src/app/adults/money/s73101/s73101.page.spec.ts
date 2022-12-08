import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73101Page } from './s73101.page';

describe('S73101Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73101Page;
  let fixture: ComponentFixture<S73101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
