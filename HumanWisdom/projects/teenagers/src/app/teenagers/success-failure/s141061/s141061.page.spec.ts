import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141061Page } from './s141061.page';

describe('S141061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141061Page;
  let fixture: ComponentFixture<S141061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
