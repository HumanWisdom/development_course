import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141069tPage } from './s141069t.page';

describe('S141069tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141069tPage;
  let fixture: ComponentFixture<S141069tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141069tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141069tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
