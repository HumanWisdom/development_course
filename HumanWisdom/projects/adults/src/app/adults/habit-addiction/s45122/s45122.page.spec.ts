import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45122Page } from './s45122.page';

describe('S45122Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45122Page;
  let fixture: ComponentFixture<S45122Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45122Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45122Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
