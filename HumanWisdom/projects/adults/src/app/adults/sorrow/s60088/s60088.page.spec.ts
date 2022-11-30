import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60088Page } from './s60088.page';

describe('S60088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60088Page;
  let fixture: ComponentFixture<S60088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
