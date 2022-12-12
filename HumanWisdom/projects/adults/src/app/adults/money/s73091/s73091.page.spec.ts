import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73091Page } from './s73091.page';

describe('S73091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73091Page;
  let fixture: ComponentFixture<S73091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
