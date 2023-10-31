import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48087Page } from './s48087.page';

describe('S48087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48087Page;
  let fixture: ComponentFixture<S48087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
