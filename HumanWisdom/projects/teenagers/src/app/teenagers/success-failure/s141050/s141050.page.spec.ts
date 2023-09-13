import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141050Page } from './s141050.page';

describe('S141050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141050Page;
  let fixture: ComponentFixture<S141050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
