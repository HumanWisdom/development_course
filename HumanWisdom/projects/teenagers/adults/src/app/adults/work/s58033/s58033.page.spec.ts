import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58033Page } from './s58033.page';

describe('S58033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58033Page;
  let fixture: ComponentFixture<S58033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
