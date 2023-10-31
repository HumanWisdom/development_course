import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48087tPage } from './s48087t.page';

describe('S48087tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48087tPage;
  let fixture: ComponentFixture<S48087tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48087tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48087tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
