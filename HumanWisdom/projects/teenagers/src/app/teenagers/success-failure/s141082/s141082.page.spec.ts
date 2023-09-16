import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141082Page } from './s141082.page';

describe('S141082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141082Page;
  let fixture: ComponentFixture<S141082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
