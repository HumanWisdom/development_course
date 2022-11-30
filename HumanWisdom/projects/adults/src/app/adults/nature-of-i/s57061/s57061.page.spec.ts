import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57061Page } from './s57061.page';

describe('S57061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57061Page;
  let fixture: ComponentFixture<S57061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
