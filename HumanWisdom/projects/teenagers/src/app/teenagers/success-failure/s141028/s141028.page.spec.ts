import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141028Page } from './s141028.page';

describe('S141028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141028Page;
  let fixture: ComponentFixture<S141028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
