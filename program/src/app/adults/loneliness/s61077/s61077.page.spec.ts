import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61077Page } from './s61077.page';

describe('S61077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61077Page;
  let fixture: ComponentFixture<S61077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
