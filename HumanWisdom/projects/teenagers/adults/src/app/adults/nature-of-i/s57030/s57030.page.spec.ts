import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57030Page } from './s57030.page';

describe('S57030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57030Page;
  let fixture: ComponentFixture<S57030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
