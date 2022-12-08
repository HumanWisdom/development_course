import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49086Page } from './s49086.page';

describe('S49086Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49086Page;
  let fixture: ComponentFixture<S49086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
