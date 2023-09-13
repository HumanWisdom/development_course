import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141095Page } from './s141095.page';

describe('S141095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141095Page;
  let fixture: ComponentFixture<S141095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
