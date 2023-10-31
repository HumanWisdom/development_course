import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49042Page } from './s49042.page';

describe('S49042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49042Page;
  let fixture: ComponentFixture<S49042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
