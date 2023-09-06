import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141053Page } from './s141053.page';

describe('S141053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141053Page;
  let fixture: ComponentFixture<S141053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
