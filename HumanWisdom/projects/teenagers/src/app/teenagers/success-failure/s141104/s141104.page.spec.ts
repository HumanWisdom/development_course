import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141104Page } from './s141104.page';

describe('S141104Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141104Page;
  let fixture: ComponentFixture<S141104Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141104Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141104Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
