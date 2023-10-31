import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60028Page } from './s60028.page';

describe('S60028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60028Page;
  let fixture: ComponentFixture<S60028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
