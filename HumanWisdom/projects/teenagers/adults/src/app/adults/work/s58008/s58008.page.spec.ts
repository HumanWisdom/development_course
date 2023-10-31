import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58008Page } from './s58008.page';

describe('S58008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58008Page;
  let fixture: ComponentFixture<S58008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
