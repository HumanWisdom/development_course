import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55030Page } from './s55030.page';

describe('S55030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55030Page;
  let fixture: ComponentFixture<S55030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
