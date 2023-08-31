import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140082Page } from './s140082.page';

describe('S140082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140082Page;
  let fixture: ComponentFixture<S140082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
