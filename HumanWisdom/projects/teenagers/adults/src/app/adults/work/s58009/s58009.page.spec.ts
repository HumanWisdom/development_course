import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58009Page } from './s58009.page';

describe('S58009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58009Page;
  let fixture: ComponentFixture<S58009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
