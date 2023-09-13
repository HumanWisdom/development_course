import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141093Page } from './s141093.page';

describe('S141093Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141093Page;
  let fixture: ComponentFixture<S141093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
