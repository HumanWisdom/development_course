import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48034Page } from './s48034.page';

describe('S48034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48034Page;
  let fixture: ComponentFixture<S48034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
