import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141098Page } from './s141098.page';

describe('S141098Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141098Page;
  let fixture: ComponentFixture<S141098Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141098Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141098Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
