import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64033Page } from './s64033.page';

describe('S64033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64033Page;
  let fixture: ComponentFixture<S64033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
