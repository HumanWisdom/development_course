import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60047Page } from './s60047.page';

describe('S60047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60047Page;
  let fixture: ComponentFixture<S60047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
