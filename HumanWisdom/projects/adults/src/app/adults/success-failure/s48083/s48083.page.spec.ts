import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48083Page } from './s48083.page';

describe('S48083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48083Page;
  let fixture: ComponentFixture<S48083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
