import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141057Page } from './s141057.page';

describe('S141057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141057Page;
  let fixture: ComponentFixture<S141057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
