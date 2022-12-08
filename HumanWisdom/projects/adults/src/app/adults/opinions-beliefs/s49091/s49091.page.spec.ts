import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49091Page } from './s49091.page';

describe('S49091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49091Page;
  let fixture: ComponentFixture<S49091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
