import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73093Page } from './s73093.page';

describe('S73093Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73093Page;
  let fixture: ComponentFixture<S73093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
