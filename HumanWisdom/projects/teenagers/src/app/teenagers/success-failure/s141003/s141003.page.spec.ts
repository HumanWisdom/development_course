import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141003Page } from './s141003.page';

describe('S141003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141003Page;
  let fixture: ComponentFixture<S141003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
