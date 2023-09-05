import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141002Page } from './s141002.page';

describe('S141002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141002Page;
  let fixture: ComponentFixture<S141002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
