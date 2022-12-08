import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58051tPage } from './s58051t.page';

describe('S58051tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58051tPage;
  let fixture: ComponentFixture<S58051tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58051tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58051tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
