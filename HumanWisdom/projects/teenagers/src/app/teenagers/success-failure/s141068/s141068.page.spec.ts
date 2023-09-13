import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141068Page } from './s141068.page';

describe('S141068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141068Page;
  let fixture: ComponentFixture<S141068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
