import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58084Page } from './s58084.page';

describe('S58084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58084Page;
  let fixture: ComponentFixture<S58084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
