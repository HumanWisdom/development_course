import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S159001Page } from './s159001.page';

describe('S159001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S159001Page;
  let fixture: ComponentFixture<S159001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S159001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S159001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
