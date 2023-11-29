import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140083Page } from './s140083.page';

describe('S140083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140083Page;
  let fixture: ComponentFixture<S140083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
