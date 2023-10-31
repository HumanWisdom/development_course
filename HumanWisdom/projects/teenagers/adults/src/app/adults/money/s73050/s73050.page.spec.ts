import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73050Page } from './s73050.page';

describe('S73050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73050Page;
  let fixture: ComponentFixture<S73050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
