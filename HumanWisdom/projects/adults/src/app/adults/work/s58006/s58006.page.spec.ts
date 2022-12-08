import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58006Page } from './s58006.page';

describe('S58006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58006Page;
  let fixture: ComponentFixture<S58006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
