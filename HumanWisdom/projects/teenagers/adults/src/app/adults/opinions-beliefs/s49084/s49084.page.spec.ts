import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49084Page } from './s49084.page';

describe('S49084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49084Page;
  let fixture: ComponentFixture<S49084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
