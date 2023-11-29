import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141033tPage } from './s141033t.page';

describe('S141033tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141033tPage;
  let fixture: ComponentFixture<S141033tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141033tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141033tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
