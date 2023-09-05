import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141008Page } from './s141008.page';

describe('S141008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141008Page;
  let fixture: ComponentFixture<S141008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
