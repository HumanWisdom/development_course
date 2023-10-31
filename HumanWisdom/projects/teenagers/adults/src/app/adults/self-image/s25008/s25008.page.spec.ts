import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25008Page } from './s25008.page';

describe('S25008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25008Page;
  let fixture: ComponentFixture<S25008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
