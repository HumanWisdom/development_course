import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58077Page } from './s58077.page';

describe('S58077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58077Page;
  let fixture: ComponentFixture<S58077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
