import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141091Page } from './s141091.page';

describe('S141091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141091Page;
  let fixture: ComponentFixture<S141091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
