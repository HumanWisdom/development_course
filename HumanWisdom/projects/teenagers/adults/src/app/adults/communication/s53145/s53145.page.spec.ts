import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53145Page } from './s53145.page';

describe('S53145Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53145Page;
  let fixture: ComponentFixture<S53145Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53145Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53145Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
