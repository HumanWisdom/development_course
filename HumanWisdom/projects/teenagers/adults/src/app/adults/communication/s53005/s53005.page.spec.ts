import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53005Page } from './s53005.page';

describe('S53005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53005Page;
  let fixture: ComponentFixture<S53005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
