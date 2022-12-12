import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S30003Page } from './s30003.page';

describe('S30003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S30003Page;
  let fixture: ComponentFixture<S30003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S30003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S30003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
