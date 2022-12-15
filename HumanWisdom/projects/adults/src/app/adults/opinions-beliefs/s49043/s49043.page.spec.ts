import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49043Page } from './s49043.page';

describe('S49043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49043Page;
  let fixture: ComponentFixture<S49043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
