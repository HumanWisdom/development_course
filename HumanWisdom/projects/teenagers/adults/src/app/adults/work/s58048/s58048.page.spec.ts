import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58048Page } from './s58048.page';

describe('S58048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58048Page;
  let fixture: ComponentFixture<S58048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
