import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141087Page } from './s141087.page';

describe('S141087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141087Page;
  let fixture: ComponentFixture<S141087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
