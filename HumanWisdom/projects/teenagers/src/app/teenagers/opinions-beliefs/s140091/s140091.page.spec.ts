import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140091Page } from './s140091.page';

describe('S140091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140091Page;
  let fixture: ComponentFixture<S140091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
