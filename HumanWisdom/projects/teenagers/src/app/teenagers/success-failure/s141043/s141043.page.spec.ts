import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141043Page } from './s141043.page';

describe('S141043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141043Page;
  let fixture: ComponentFixture<S141043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
