import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141094Page } from './s141094.page';

describe('S141094Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141094Page;
  let fixture: ComponentFixture<S141094Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141094Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141094Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
