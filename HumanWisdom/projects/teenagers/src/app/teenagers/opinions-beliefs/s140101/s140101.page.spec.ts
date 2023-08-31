import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140101Page } from './s140101.page';

describe('S140101Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140101Page;
  let fixture: ComponentFixture<S140101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
