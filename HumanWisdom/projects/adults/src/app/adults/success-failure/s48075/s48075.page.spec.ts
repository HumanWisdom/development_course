import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48075Page } from './s48075.page';

describe('S48075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48075Page;
  let fixture: ComponentFixture<S48075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
