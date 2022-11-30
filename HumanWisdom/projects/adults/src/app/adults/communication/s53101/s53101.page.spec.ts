import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53101Page } from './s53101.page';

describe('S53101Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53101Page;
  let fixture: ComponentFixture<S53101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
