import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59065tPage } from './s59065t.page';

describe('S59065tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59065tPage;
  let fixture: ComponentFixture<S59065tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59065tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59065tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
