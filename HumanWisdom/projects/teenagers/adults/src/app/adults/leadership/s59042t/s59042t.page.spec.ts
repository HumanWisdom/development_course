import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59042tPage } from './s59042t.page';

describe('S59042tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59042tPage;
  let fixture: ComponentFixture<S59042tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59042tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59042tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
