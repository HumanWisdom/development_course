import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48076Page } from './s48076.page';

describe('S48076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48076Page;
  let fixture: ComponentFixture<S48076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
