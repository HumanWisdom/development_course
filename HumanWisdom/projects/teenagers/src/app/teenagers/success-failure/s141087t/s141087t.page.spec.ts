import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141087tPage } from './s141087t.page';

describe('S141087tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141087tPage;
  let fixture: ComponentFixture<S141087tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141087tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141087tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
