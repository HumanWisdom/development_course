import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141030Page } from './s141030.page';

describe('S141030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141030Page;
  let fixture: ComponentFixture<S141030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
