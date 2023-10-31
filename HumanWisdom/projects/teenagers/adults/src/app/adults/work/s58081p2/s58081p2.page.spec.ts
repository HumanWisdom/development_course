import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58081p2Page } from './s58081p2.page';

describe('S58081p2Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58081p2Page;
  let fixture: ComponentFixture<S58081p2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58081p2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58081p2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
