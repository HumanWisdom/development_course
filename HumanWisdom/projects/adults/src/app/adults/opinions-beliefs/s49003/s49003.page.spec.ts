import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49003Page } from './s49003.page';

describe('S49003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49003Page;
  let fixture: ComponentFixture<S49003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
