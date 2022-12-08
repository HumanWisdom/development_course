import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49082Page } from './s49082.page';

describe('S49082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49082Page;
  let fixture: ComponentFixture<S49082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
