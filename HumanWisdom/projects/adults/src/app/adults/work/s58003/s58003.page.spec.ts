import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58003Page } from './s58003.page';

describe('S58003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58003Page;
  let fixture: ComponentFixture<S58003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
