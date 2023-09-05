import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141033Page } from './s141033.page';

describe('S141033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141033Page;
  let fixture: ComponentFixture<S141033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
