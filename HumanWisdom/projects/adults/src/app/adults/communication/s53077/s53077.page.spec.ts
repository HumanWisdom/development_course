import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53077Page } from './s53077.page';

describe('S53077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53077Page;
  let fixture: ComponentFixture<S53077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
