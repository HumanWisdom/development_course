import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59055tPage } from './s59055t.page';

describe('S59055tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59055tPage;
  let fixture: ComponentFixture<S59055tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59055tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59055tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
