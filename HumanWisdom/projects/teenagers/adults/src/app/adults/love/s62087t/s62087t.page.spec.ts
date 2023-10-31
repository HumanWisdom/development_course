import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62087tPage } from './s62087t.page';

describe('S62087tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62087tPage;
  let fixture: ComponentFixture<S62087tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62087tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62087tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
