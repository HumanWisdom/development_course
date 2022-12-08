import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46030Page } from './s46030.page';

describe('S46030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46030Page;
  let fixture: ComponentFixture<S46030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
