import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45093Page } from './s45093.page';

describe('S45093Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45093Page;
  let fixture: ComponentFixture<S45093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
