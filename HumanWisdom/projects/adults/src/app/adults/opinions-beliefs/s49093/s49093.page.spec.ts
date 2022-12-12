import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49093Page } from './s49093.page';

describe('S49093Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49093Page;
  let fixture: ComponentFixture<S49093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
