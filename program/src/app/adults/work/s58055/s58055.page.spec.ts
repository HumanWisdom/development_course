import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58055Page } from './s58055.page';

describe('S58055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58055Page;
  let fixture: ComponentFixture<S58055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
