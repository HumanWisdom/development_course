import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73082Page } from './s73082.page';

describe('S73082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73082Page;
  let fixture: ComponentFixture<S73082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
