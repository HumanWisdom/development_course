import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59108tPage } from './s59108t.page';

describe('S59108tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59108tPage;
  let fixture: ComponentFixture<S59108tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59108tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59108tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
