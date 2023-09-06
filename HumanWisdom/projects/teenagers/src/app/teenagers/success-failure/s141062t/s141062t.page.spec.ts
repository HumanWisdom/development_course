import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141062tPage } from './s141062t.page';

describe('S141062tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141062tPage;
  let fixture: ComponentFixture<S141062tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141062tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141062tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
