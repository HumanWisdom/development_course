import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45030Page } from './s45030.page';

describe('S45030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45030Page;
  let fixture: ComponentFixture<S45030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
