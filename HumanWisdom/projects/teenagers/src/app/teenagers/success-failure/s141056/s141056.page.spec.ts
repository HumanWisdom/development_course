import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141056Page } from './s141056.page';

describe('S141056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141056Page;
  let fixture: ComponentFixture<S141056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
