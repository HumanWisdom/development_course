import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18093Page } from './s18093.page';

describe('S18093Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18093Page;
  let fixture: ComponentFixture<S18093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
