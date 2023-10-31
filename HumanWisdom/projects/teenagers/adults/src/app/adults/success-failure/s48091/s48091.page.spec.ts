import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48091Page } from './s48091.page';

describe('S48091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48091Page;
  let fixture: ComponentFixture<S48091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
