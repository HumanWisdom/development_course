import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18061Page } from './s18061.page';

describe('S18061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18061Page;
  let fixture: ComponentFixture<S18061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
