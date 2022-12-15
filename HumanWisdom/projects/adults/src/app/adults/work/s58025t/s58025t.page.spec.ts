import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58025tPage } from './s58025t.page';

describe('S58025tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58025tPage;
  let fixture: ComponentFixture<S58025tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58025tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58025tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
