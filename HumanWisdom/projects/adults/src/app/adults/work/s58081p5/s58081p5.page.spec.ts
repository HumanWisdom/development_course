import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58081p5Page } from './s58081p5.page';

describe('S58081p5Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58081p5Page;
  let fixture: ComponentFixture<S58081p5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58081p5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58081p5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
