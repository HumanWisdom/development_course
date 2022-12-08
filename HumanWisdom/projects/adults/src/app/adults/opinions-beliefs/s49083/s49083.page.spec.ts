import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49083Page } from './s49083.page';

describe('S49083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49083Page;
  let fixture: ComponentFixture<S49083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
