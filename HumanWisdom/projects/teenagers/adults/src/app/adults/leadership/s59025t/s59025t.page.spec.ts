import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59025tPage } from './s59025t.page';

describe('S59025tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59025tPage;
  let fixture: ComponentFixture<S59025tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59025tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59025tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
