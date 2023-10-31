import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48093Page } from './s48093.page';

describe('S48093Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48093Page;
  let fixture: ComponentFixture<S48093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
