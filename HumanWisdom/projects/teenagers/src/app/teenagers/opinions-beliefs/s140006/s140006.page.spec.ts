import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140006Page } from './s140006.page';

describe('S140006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140006Page;
  let fixture: ComponentFixture<S140006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
