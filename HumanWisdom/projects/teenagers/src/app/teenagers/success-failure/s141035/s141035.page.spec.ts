import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141035Page } from './s141035.page';

describe('S141035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141035Page;
  let fixture: ComponentFixture<S141035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
