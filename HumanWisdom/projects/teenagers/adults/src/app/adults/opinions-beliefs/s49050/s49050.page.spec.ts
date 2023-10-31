import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49050Page } from './s49050.page';

describe('S49050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49050Page;
  let fixture: ComponentFixture<S49050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
