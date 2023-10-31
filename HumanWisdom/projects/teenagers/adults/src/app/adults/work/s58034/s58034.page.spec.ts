import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58034Page } from './s58034.page';

describe('S58034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58034Page;
  let fixture: ComponentFixture<S58034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
