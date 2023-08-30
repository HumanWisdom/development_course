import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140056Page } from './s140056.page';

describe('S140056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140056Page;
  let fixture: ComponentFixture<S140056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
