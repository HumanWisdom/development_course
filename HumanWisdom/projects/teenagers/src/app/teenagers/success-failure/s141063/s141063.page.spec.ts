import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141063Page } from './s141063.page';

describe('S141063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141063Page;
  let fixture: ComponentFixture<S141063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
