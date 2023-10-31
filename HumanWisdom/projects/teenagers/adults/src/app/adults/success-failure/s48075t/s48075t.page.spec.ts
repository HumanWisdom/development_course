import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48075tPage } from './s48075t.page';

describe('S48075tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48075tPage;
  let fixture: ComponentFixture<S48075tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48075tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48075tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
