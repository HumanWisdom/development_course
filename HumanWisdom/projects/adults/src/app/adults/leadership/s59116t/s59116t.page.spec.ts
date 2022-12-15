import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59116tPage } from './s59116t.page';

describe('S59116tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59116tPage;
  let fixture: ComponentFixture<S59116tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59116tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59116tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
