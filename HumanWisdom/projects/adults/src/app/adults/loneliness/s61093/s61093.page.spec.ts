import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61093Page } from './s61093.page';

describe('S61093Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61093Page;
  let fixture: ComponentFixture<S61093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
