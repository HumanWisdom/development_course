import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58081p1Page } from './s58081p1.page';

describe('S58081p1Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58081p1Page;
  let fixture: ComponentFixture<S58081p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58081p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58081p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
