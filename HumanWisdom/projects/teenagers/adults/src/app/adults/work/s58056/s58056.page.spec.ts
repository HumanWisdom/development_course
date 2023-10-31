import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58056Page } from './s58056.page';

describe('S58056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58056Page;
  let fixture: ComponentFixture<S58056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
