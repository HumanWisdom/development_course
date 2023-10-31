import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58081p6Page } from './s58081p6.page';

describe('S58081p6Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58081p6Page;
  let fixture: ComponentFixture<S58081p6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58081p6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58081p6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
