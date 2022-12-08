import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48088Page } from './s48088.page';

describe('S48088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48088Page;
  let fixture: ComponentFixture<S48088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
