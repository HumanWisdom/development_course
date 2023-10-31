import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59048tPage } from './s59048t.page';

describe('S59048tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59048tPage;
  let fixture: ComponentFixture<S59048tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59048tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59048tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
