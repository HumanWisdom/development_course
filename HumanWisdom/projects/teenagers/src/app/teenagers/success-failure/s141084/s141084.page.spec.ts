import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141084Page } from './s141084.page';

describe('S141084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141084Page;
  let fixture: ComponentFixture<S141084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
