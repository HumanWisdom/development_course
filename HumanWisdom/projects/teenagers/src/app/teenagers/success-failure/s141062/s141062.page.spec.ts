import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141062Page } from './s141062.page';

describe('S141062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141062Page;
  let fixture: ComponentFixture<S141062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
