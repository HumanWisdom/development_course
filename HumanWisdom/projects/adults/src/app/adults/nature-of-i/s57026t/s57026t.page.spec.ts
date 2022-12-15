import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57026tPage } from './s57026t.page';

describe('S57026tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57026tPage;
  let fixture: ComponentFixture<S57026tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57026tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57026tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
