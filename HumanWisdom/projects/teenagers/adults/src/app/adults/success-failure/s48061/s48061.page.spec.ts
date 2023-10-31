import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48061Page } from './s48061.page';

describe('S48061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48061Page;
  let fixture: ComponentFixture<S48061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
