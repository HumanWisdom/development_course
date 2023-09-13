import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141020Page } from './s141020.page';

describe('S141020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141020Page;
  let fixture: ComponentFixture<S141020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
