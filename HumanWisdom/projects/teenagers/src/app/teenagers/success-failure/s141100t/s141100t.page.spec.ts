import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141100tPage } from './s141100t.page';

describe('S141100tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141100tPage;
  let fixture: ComponentFixture<S141100tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141100tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141100tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
