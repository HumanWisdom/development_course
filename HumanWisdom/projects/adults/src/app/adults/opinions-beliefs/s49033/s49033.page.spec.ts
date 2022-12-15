import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49033Page } from './s49033.page';

describe('S49033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49033Page;
  let fixture: ComponentFixture<S49033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
