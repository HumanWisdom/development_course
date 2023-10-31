import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59073tPage } from './s59073t.page';

describe('S59073tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59073tPage;
  let fixture: ComponentFixture<S59073tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59073tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59073tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
