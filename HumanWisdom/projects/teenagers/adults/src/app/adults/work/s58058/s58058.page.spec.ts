import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58058Page } from './s58058.page';

describe('S58058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58058Page;
  let fixture: ComponentFixture<S58058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
