import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141037Page } from './s141037.page';

describe('S141037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141037Page;
  let fixture: ComponentFixture<S141037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
