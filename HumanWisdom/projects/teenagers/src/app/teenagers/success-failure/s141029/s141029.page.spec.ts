import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141029Page } from './s141029.page';

describe('S141029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141029Page;
  let fixture: ComponentFixture<S141029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
