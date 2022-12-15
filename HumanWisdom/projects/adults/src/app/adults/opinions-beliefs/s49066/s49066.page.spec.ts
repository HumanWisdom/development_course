import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49066Page } from './s49066.page';

describe('S49066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49066Page;
  let fixture: ComponentFixture<S49066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
